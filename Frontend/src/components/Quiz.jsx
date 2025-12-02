import { useState, useEffect } from 'react';
import './Quiz.css';

function Quiz({ question, options, correctAnswer, questionId }) {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [hasAnswered, setHasAnswered] = useState(false);
  const [userName, setUserName] = useState('');
  // Mock results - will be replaced with database later
  const [results, setResults] = useState({});

  useEffect(() => {
    // Get username from localStorage
    const storedName = localStorage.getItem('userName');
    if (storedName) {
      setUserName(storedName);
    }
  }, []);

  const handleAnswer = (answer) => {
    if (!userName) {
      const name = prompt('Please enter your name:');
      if (name) {
        localStorage.setItem('userName', name);
        setUserName(name);
      } else {
        return;
      }
    }

    setSelectedAnswer(answer);
    setHasAnswered(true);

    // Update mock results
    setResults(prev => ({
      ...prev,
      [answer]: [...(prev[answer] || []), userName]
    }));
  };

  const changeAnswer = (answer) => {
    // Remove user from previous answer
    setResults(prev => {
      const updated = { ...prev };
      if (selectedAnswer && updated[selectedAnswer]) {
        updated[selectedAnswer] = updated[selectedAnswer].filter(name => name !== userName);
      }
      // Add to new answer
      updated[answer] = [...(updated[answer] || []), userName];
      return updated;
    });
    setSelectedAnswer(answer);
  };

  return (
    <div className="quiz-container">
      <form className="quiz-form" onSubmit={(e) => e.preventDefault()}>
        <h3 className="quiz-question">{question}</h3>
        <div className="quiz-options">
          {options.map((option, index) => (
            <button
              key={index}
              type="button"
              onClick={() => hasAnswered ? changeAnswer(option) : handleAnswer(option)}
              className={`quiz-option-btn
                ${selectedAnswer === option ? 'selected' : ''}
                ${hasAnswered && option === correctAnswer ? 'correct' : ''}
                ${hasAnswered && selectedAnswer === option && option !== correctAnswer ? 'incorrect' : ''}
              `}
            >
              {option}
            </button>
          ))}
        </div>

        {hasAnswered && (
          <>
            <div className="quiz-feedback">
              <p className={selectedAnswer === correctAnswer ? 'feedback-correct' : 'feedback-incorrect'}>
                {selectedAnswer === correctAnswer
                  ? 'Correct!'
                  : `Incorrect. The correct answer is: ${correctAnswer}`}
              </p>
            </div>

            <div className="quiz-results">
              <h4>Poll Results:</h4>
              {options.map((option, index) => {
                const count = results[option]?.length || 0;
                const totalVotes = Object.values(results).reduce((sum, voters) => sum + (voters?.length || 0), 0);
                const percentage = totalVotes > 0 ? Math.round((count / totalVotes) * 100) : 0;

                return (
                  <div key={index} className="result-item">
                    <div className="result-header">
                      <span className="result-option">{option}</span>
                      <span className="result-stats">{count} votes ({percentage}%)</span>
                    </div>
                    <div className="result-bar">
                      <div
                        className="result-bar-fill"
                        style={{ width: `${percentage}%` }}
                      ></div>
                    </div>
                    {results[option] && results[option].length > 0 && (
                      <p className="voters">Voters: {results[option].join(', ')}</p>
                    )}
                  </div>
                );
              })}
            </div>
          </>
        )}
      </form>
    </div>
  );
}

export default Quiz;
