import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>Home</Link>
        <Link to="/musical-elements" className={`nav-link ${location.pathname === '/musical-elements' ? 'active' : ''}`}>Musical Elements & Emotion</Link>
        <Link to="/instrumentation" className={`nav-link ${location.pathname === '/instrumentation' ? 'active' : ''}`}>Instrumentation & Mood</Link>
        <Link to="/techniques" className={`nav-link ${location.pathname === '/techniques' ? 'active' : ''}`}>Composer Techniques</Link>
        <Link to="/famous-scores" className={`nav-link ${location.pathname === '/famous-scores' ? 'active' : ''}`}>Famous Scores</Link>
        <Link to="/narrative" className={`nav-link ${location.pathname === '/narrative' ? 'active' : ''}`}>Enhancing Narrative</Link>
        <Link to="/power-of-score" className={`nav-link ${location.pathname === '/power-of-score' ? 'active' : ''}`}>Power of Score</Link>
      </div>
    </nav>
  );
}

export default Navigation;
