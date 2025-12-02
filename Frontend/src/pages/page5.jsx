import Quiz from '../components/Quiz';
import Comments from '../components/Comments';
import './pages.css';

function FamousScoresPage() {
  return (
    <div className="page famous-scores-page">
      <h1>Famous Scores Breakdown</h1>

      <section className="intro">
        <p>
          Let's analyze some of the most iconic film scores ever created. These masterpieces
          demonstrate everything we've learned about musical elements, instrumentation, and
          compositional techniques.
        </p>
      </section>

      <section className="content-section">
        <h2>Jaws (1975) - John Williams</h2>
        <h3>The Power of Simplicity</h3>
        <p>
          Perhaps the most famous two notes in film history. The Jaws theme proves that
          simplicity can be terrifying.
        </p>
        <p><strong>What makes it work:</strong></p>
        <ul>
          <li><strong>Minimalism:</strong> Just two alternating notes (E and F)</li>
          <li><strong>Tempo:</strong> Starts slow, accelerates as danger approaches</li>
          <li><strong>Low register:</strong> Deep cellos and basses create dread</li>
          <li><strong>Repetition:</strong> Relentless pattern mimics predatory stalking</li>
          <li><strong>Psychological impact:</strong> Even outside the film, these notes trigger fear</li>
        </ul>
        <p>
          Director Steven Spielberg initially thought Williams was joking with such a simple
          theme. It became one of the most recognizable motifs ever written.
        </p>
      </section>

      <Quiz
        questionId="q5-1"
        question="The Jaws theme uses how many notes in its main motif?"
        options={['One', 'Two', 'Four', 'Seven']}
        correctAnswer="Two"
      />

      <section className="content-section">
        <h2>Star Wars (1977) - John Williams</h2>
        <h3>The Master of Leitmotifs</h3>
        <p>
          John Williams created a symphony of interconnected themes, each character and
          concept getting their own musical identity.
        </p>
        <p><strong>Key themes:</strong></p>
        <ul>
          <li><strong>Main Theme:</strong> Heroic, major key, triumphant brass fanfare</li>
          <li><strong>Imperial March:</strong> Militaristic, minor key, menacing</li>
          <li><strong>Force Theme:</strong> Mystical, spiritual, woodwinds and strings</li>
          <li><strong>Princess Leia's Theme:</strong> Romantic, elegant, flowing melody</li>
        </ul>
        <p><strong>Why it's brilliant:</strong></p>
        <ul>
          <li>Classical orchestration gives timeless, epic feel</li>
          <li>Themes evolve and combine throughout the saga</li>
          <li>Music tells the story even without visuals</li>
          <li>Inspired by classical composers (Holst, Wagner, Korngold)</li>
        </ul>
      </section>

      <Quiz
        questionId="q5-2"
        question="Who composed the score for Star Wars?"
        options={['Hans Zimmer', 'John Williams', 'Ennio Morricone', 'Danny Elfman']}
        correctAnswer="John Williams"
      />

      <section className="content-section">
        <h2>Inception (2010) - Hans Zimmer</h2>
        <h3>Time Manipulation Through Sound</h3>
        <p>
          Zimmer's score for Inception is inseparable from the film's concept of layered
          dream realities and time dilation.
        </p>
        <p><strong>Innovative elements:</strong></p>
        <ul>
          <li><strong>The "BRAAAM":</strong> Processed brass sound that became iconic and widely imitated</li>
          <li><strong>Time manipulation:</strong> Edith Piaf's "Non, Je Ne Regrette Rien" slowed down</li>
          <li><strong>Layering:</strong> Multiple musical layers for different dream levels</li>
          <li><strong>Tension building:</strong> Relentless crescendos create urgency</li>
          <li><strong>Emotional depth:</strong> "Time" theme is heartbreaking and beautiful</li>
        </ul>
        <p>
          The score works as intellectual puzzle and emotional journey, perfectly matching
          Nolan's complex narrative.
        </p>
      </section>

      <section className="content-section">
        <h2>Interstellar (2014) - Hans Zimmer</h2>
        <h3>The Organ in Space</h3>
        <p>
          Zimmer made the unconventional choice of featuring a church organ as the primary
          instrument for a space film.
        </p>
        <p><strong>Creative decisions:</strong></p>
        <ul>
          <li><strong>Organ choice:</strong> Spiritual, timeless quality; represents humanity</li>
          <li><strong>Minimalism:</strong> Simple chord progressions with maximum emotional impact</li>
          <li><strong>Ticking clock:</strong> Actual ticking represents time relativity</li>
          <li><strong>Silence:</strong> Strategic use of quiet in space scenes</li>
          <li><strong>Crescendos:</strong> Massive builds for docking scene and climax</li>
        </ul>
        <p>
          The organ creates unexpected warmth in the cold vacuum of space, emphasizing
          the human element in a cosmic journey.
        </p>
      </section>

      <Quiz
        questionId="q5-3"
        question="What instrument is prominently featured in Interstellar's score?"
        options={['Piano', 'Guitar', 'Organ', 'Synthesizer']}
        correctAnswer="Organ"
      />

      <section className="content-section">
        <h2>The Dark Knight (2008) - Hans Zimmer & James Newton Howard</h2>
        <h3>Chaos Through Dissonance</h3>
        <p>
          The Joker's theme is barely musicit's sound design that creates psychological
          discomfort.
        </p>
        <p><strong>Compositional approach:</strong></p>
        <ul>
          <li><strong>One-note theme:</strong> Rising, grinding note for the Joker</li>
          <li><strong>Dissonance:</strong> Deliberately unpleasant sounds</li>
          <li><strong>Unpredictability:</strong> No traditional melody or structure</li>
          <li><strong>Batman's theme:</strong> Two-note motif suggesting duality</li>
          <li><strong>Electronic elements:</strong> Mixed with orchestra for modern edge</li>
        </ul>
      </section>

      <Quiz
        questionId="q5-4"
        question="Match the composer to their famous film score:"
        options={[
          'John Williams - Inception',
          'Hans Zimmer - Star Wars',
          'John Williams - Jaws',
          'Danny Elfman - The Dark Knight'
        ]}
        correctAnswer="John Williams - Jaws"
      />

      <Comments pageId="page5" />
    </div>
  );
}

export default FamousScoresPage;
