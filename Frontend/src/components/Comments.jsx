import { useState, useEffect } from 'react';
import NamePromptModal from './NamePromptModal';
import './Comments.css';

function Comments({ pageId }) {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [userName, setUserName] = useState('');
  const [showNameModal, setShowNameModal] = useState(false);
  const [pendingComment, setPendingComment] = useState('');

  useEffect(() => {
    // Get username from localStorage
    const storedName = localStorage.getItem('userName');
    if (storedName) {
      setUserName(storedName);
    }
  }, []);

  const handleNameSubmit = (name) => {
    localStorage.setItem('userName', name);
    setUserName(name);
    setShowNameModal(false);

    // Submit the pending comment
    if (pendingComment.trim()) {
      const comment = {
        id: Date.now(),
        pageId,
        userName: name,
        text: pendingComment,
        timestamp: new Date().toISOString()
      };

      setComments([...comments, comment]);
      setNewComment('');
      setPendingComment('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!userName) {
      setPendingComment(newComment);
      setShowNameModal(true);
      return;
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

      <NamePromptModal
        isOpen={showNameModal}
        onClose={() => setShowNameModal(false)}
        onSubmit={handleNameSubmit}
      />

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
