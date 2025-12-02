# Backend API for Film Scores Website

Python Flask backend for handling comments and quiz answers with Supabase database.

## Setup

### 1. Install Dependencies

```bash
cd Backend
pip install -r requirements.txt
```

### 2. Set Up Supabase

1. Go to [supabase.com](https://supabase.com) and create a new project
2. In the SQL Editor, run the queries from `database_setup.sql` to create the tables
3. Get your project URL and anon key from Settings > API

### 3. Configure Environment Variables

1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```

2. Edit `.env` and add your Supabase credentials:
   ```
   SUPABASE_URL=https://your-project.supabase.co
   SUPABASE_KEY=your-anon-key-here
   ```

### 4. Run the Server

```bash
python app.py
```

The server will start on `http://localhost:5000`

## API Endpoints

### Health Check
- **GET** `/api/health` - Check if the server is running

### Comments
- **POST** `/api/comments` - Create a new comment
  ```json
  {
    "pageId": "page2",
    "userName": "John Doe",
    "text": "Great explanation!"
  }
  ```

- **GET** `/api/comments/:pageId` - Get all comments for a page

### Quiz Answers
- **POST** `/api/quiz/answer` - Submit a quiz answer
  ```json
  {
    "questionId": "q2-1",
    "userName": "John Doe",
    "answer": "Sadness",
    "isCorrect": true
  }
  ```

- **GET** `/api/quiz/results/:questionId` - Get aggregated results for a question

- **GET** `/api/quiz/user-answer/:questionId/:userName` - Get a specific user's answer

## Database Schema

### comments
- `id` - Auto-incrementing primary key
- `page_id` - Page identifier (e.g., "page2")
- `user_name` - Name of the commenter
- `text` - Comment text
- `created_at` - Timestamp
- `updated_at` - Timestamp

### quiz_answers
- `id` - Auto-incrementing primary key
- `question_id` - Question identifier (e.g., "q2-1")
- `user_name` - Name of the user
- `answer` - Selected answer
- `is_correct` - Whether the answer was correct
- `created_at` - Timestamp

## CORS

CORS is enabled for all origins in development. For production, update the CORS configuration in `app.py` to restrict to your frontend domain.
