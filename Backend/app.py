from flask import Flask, request, jsonify
from flask_cors import CORS
from supabase import create_client, Client
from dotenv import load_dotenv
import os
from datetime import datetime

# Load environment variables
load_dotenv()

app = Flask(__name__)
CORS(app)

# Initialize Supabase client
supabase_url = os.getenv('SUPABASE_URL')
supabase_key = os.getenv('SUPABASE_KEY')
supabase: Client = create_client(supabase_url, supabase_key)


# Health check endpoint
@app.route('/api/health', methods=['GET'])
def health_check():
    return jsonify({'status': 'healthy', 'message': 'Backend is running'}), 200


# Comments endpoints
@app.route('/api/comments', methods=['POST'])
def create_comment():
    """Create a new comment"""
    try:
        data = request.json

        # Validate required fields
        if not all(key in data for key in ['pageId', 'userName', 'text']):
            return jsonify({'error': 'Missing required fields'}), 400

        comment_data = {
            'page_id': data['pageId'],
            'user_name': data['userName'],
            'text': data['text'],
            'created_at': datetime.utcnow().isoformat()
        }

        # Insert into Supabase
        result = supabase.table('comments').insert(comment_data).execute()

        return jsonify({
            'success': True,
            'comment': result.data[0] if result.data else None
        }), 201

    except Exception as e:
        return jsonify({'error': str(e)}), 500


@app.route('/api/comments/<page_id>', methods=['GET'])
def get_comments(page_id):
    """Get all comments for a specific page"""
    try:
        result = supabase.table('comments')\
            .select('*')\
            .eq('page_id', page_id)\
            .order('created_at', desc=True)\
            .execute()

        return jsonify({
            'success': True,
            'comments': result.data
        }), 200

    except Exception as e:
        return jsonify({'error': str(e)}), 500


# Quiz results endpoints
@app.route('/api/quiz/answer', methods=['POST'])
def submit_quiz_answer():
    """Submit a quiz answer"""
    try:
        data = request.json

        # Validate required fields
        if not all(key in data for key in ['questionId', 'userName', 'answer']):
            return jsonify({'error': 'Missing required fields'}), 400

        quiz_data = {
            'question_id': data['questionId'],
            'user_name': data['userName'],
            'answer': data['answer'],
            'is_correct': data.get('isCorrect', False),
            'created_at': datetime.utcnow().isoformat()
        }

        # Insert into Supabase
        result = supabase.table('quiz_answers').insert(quiz_data).execute()

        return jsonify({
            'success': True,
            'answer': result.data[0] if result.data else None
        }), 201

    except Exception as e:
        return jsonify({'error': str(e)}), 500


@app.route('/api/quiz/results/<question_id>', methods=['GET'])
def get_quiz_results(question_id):
    """Get aggregated results for a specific quiz question"""
    try:
        # Get all answers for this question
        result = supabase.table('quiz_answers')\
            .select('answer, user_name')\
            .eq('question_id', question_id)\
            .execute()

        # Aggregate results by answer
        answer_counts = {}
        for record in result.data:
            answer = record['answer']
            user_name = record['user_name']

            if answer not in answer_counts:
                answer_counts[answer] = {
                    'count': 0,
                    'voters': []
                }

            answer_counts[answer]['count'] += 1
            answer_counts[answer]['voters'].append(user_name)

        return jsonify({
            'success': True,
            'results': answer_counts
        }), 200

    except Exception as e:
        return jsonify({'error': str(e)}), 500


@app.route('/api/quiz/user-answer/<question_id>/<user_name>', methods=['GET'])
def get_user_answer(question_id, user_name):
    """Get a specific user's answer for a question"""
    try:
        result = supabase.table('quiz_answers')\
            .select('*')\
            .eq('question_id', question_id)\
            .eq('user_name', user_name)\
            .order('created_at', desc=True)\
            .limit(1)\
            .execute()

        return jsonify({
            'success': True,
            'answer': result.data[0] if result.data else None
        }), 200

    except Exception as e:
        return jsonify({'error': str(e)}), 500


if __name__ == '__main__':
    app.run(debug=True, port=5000)
