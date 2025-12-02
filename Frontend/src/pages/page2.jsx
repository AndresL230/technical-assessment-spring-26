import Quiz from '../components/Quiz';
import Comments from '../components/Comments';
import './pages.css';

function MusicalElementsPage() {
  return (
    <div className="page musical-elements-page">
      <h1>Musical Elements & Emotion</h1>

      <section className="intro">
        <p>
          Music is made up of fundamental building blocks that work together to create
          emotional responses. Understanding these elements helps us see how composers
          manipulate our feelings with precision.
        </p>
      </section>

      <section className="content-section">
        <h2>Tempo: The Pace of Emotion</h2>
        <p>
          <strong>Fast tempo</strong> creates excitement, urgency, or anxiety. Think of action
          sequences where rapid beats match the on-screen chaos.
        </p>
        <p>
          <strong>Slow tempo</strong> evokes calm, sadness, or contemplation. Funeral scenes
          and romantic moments often use slower tempos to give viewers time to feel.
        </p>
        <p>
          <em>Example:</em> The frantic pace in "The Dark Knight" chase scenes versus the
          slow, mournful theme when Batman mourns Rachel.
        </p>
      </section>

      <Quiz
        questionId="q2-1"
        question="What emotion does a slow tempo in a minor key typically convey?"
        options={['Joy', 'Sadness', 'Excitement', 'Anger']}
        correctAnswer="Sadness"
      />

      <section className="content-section">
        <h2>Key: Major vs Minor</h2>
        <p>
          <strong>Major keys</strong> generally sound happy, triumphant, or bright. Victory
          themes and joyful moments typically use major keys.
        </p>
        <p>
          <strong>Minor keys</strong> sound sad, ominous, or mysterious. Horror films and
          dramatic scenes rely heavily on minor keys.
        </p>
        <p>
          <em>Example:</em> Star Wars' main theme (major key = heroic) versus the Imperial
          March (minor key = threatening).
        </p>
      </section>

      <Quiz
        questionId="q2-2"
        question="Which musical element builds tension through gradual increase?"
        options={['Crescendo', 'Decrescendo', 'Staying quiet', 'Tempo change']}
        correctAnswer="Crescendo"
      />

      <section className="content-section">
        <h2>Dynamics: Loud and Soft</h2>
        <p>
          <strong>Loud dynamics</strong> create power, danger, or intensity. Explosions,
          reveals, and climactic moments use forte (loud) markings.
        </p>
        <p>
          <strong>Soft dynamics</strong> create intimacy, suspense, or vulnerability. Quiet
          scenes draw us in and make us listen carefully.
        </p>
        <p>
          <strong>Crescendos</strong> (gradual increase) build tension masterfully, making us
          anticipate something big is coming.
        </p>
      </section>

      <section className="content-section">
        <h2>Melody vs Harmony</h2>
        <p>
          The <strong>melody</strong> is what you humthe main tune that sticks in your head.
        </p>
        <p>
          The <strong>harmony</strong> supports the melody with chords and additional notes,
          adding emotional depth and complexity.
        </p>
        <p>
          Together, they create the complete emotional palette. A simple melody can become
          heartbreaking, joyful, or terrifying based on its harmonic support.
        </p>
      </section>

      <Quiz
        questionId="q2-3"
        question="A major key typically conveys which emotion?"
        options={['Sadness', 'Fear', 'Happiness', 'Mystery']}
        correctAnswer="Happiness"
      />

      <Comments pageId="page2" />
    </div>
  );
}

export default MusicalElementsPage;
