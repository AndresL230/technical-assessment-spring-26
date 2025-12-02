import { useState, useEffect } from 'react';
import './Comments.css';

function Comments({ pageId }) {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [userName, setUserName] = useState('');

  useEffect(() => {
    // Get username from localStorage
    const storedName = localStorage.getItem('userName');
    if (storedName) {
      setUserName(storedName);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!userName) {
      const name = prompt('Please enter your name:');
      if (name) {
        localStorage.setItem('userName', name);
        setUserName(name);
      } else {
        return;
      }
    }

    if (newComment.trim()) {
      const comment = {
        id: Date.now(),
        pageId,
        userName,
        text: newComment,
        timestamp: new Date().toISOString()
      };

      setComments([...comments, comment]);
      setNewComment('');
    }
  };

  return (
    <div className="comments-section">
      <h3>Comments</h3>

      <form onSubmit={handleSubmit} className="comment-form">
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Share your thoughts or ask a question..."
          rows="4"
        />
        <button type="submit">Post Comment</button>
      </form>

      <div className="comments-list">
        {comments.length > 0 && (
          comments.map(comment => (
            <div key={comment.id} className="comment">
              <div className="comment-header">
                <strong>{comment.userName}</strong>
                <span className="comment-date">
                  {new Date(comment.timestamp).toLocaleDateString()}
                </span>
              </div>
              <p className="comment-text">{comment.text}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Comments;
