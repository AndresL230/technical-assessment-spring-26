import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/musical-elements" className="nav-link">Musical Elements & Emotion</Link>
        <Link to="/instrumentation" className="nav-link">Instrumentation & Mood</Link>
        <Link to="/techniques" className="nav-link">Composer Techniques</Link>
        <Link to="/famous-scores" className="nav-link">Famous Scores</Link>
        <Link to="/narrative" className="nav-link">Enhancing Narrative</Link>
        <Link to="/power-of-score" className="nav-link">Power of Score</Link>
      </div>
    </nav>
  );
}

export default Navigation;
