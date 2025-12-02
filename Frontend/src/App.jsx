import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePage from './pages/homePage';
import MusicalElementsPage from './pages/page2';
import InstrumentationPage from './pages/page3';
import TechniquesPage from './pages/page4';
import FamousScoresPage from './pages/page5';
import NarrativePage from './pages/page6';
import PowerOfScorePage from './pages/page7';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/musical-elements" element={<MusicalElementsPage />} />
            <Route path="/instrumentation" element={<InstrumentationPage />} />
            <Route path="/techniques" element={<TechniquesPage />} />
            <Route path="/famous-scores" element={<FamousScoresPage />} />
            <Route path="/narrative" element={<NarrativePage />} />
            <Route path="/power-of-score" element={<PowerOfScorePage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
