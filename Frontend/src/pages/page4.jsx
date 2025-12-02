import Quiz from '../components/Quiz';
import Comments from '../components/Comments';
import './pages.css';

function TechniquesPage() {
  return (
    <div className="page techniques-page">
      <h1>Techniques Composers Use</h1>

      <section className="intro">
        <p>
          Composers have a sophisticated toolkit of techniques to enhance storytelling.
          These methods help create memorable themes, build tension, and guide the audience's
          emotional journey through the film.
        </p>
      </section>

      <section className="content-section">
        <h2>Leitmotifs: Musical Calling Cards</h2>
        <p>
          A <strong>leitmotif</strong> is a recurring musical theme associated with a character,
          place, idea, or emotion. When you hear it, you instantly know what it represents.
        </p>
        <p><strong>Examples:</strong></p>
        <ul>
          <li>Darth Vader's Imperial March (Star Wars)</li>
          <li>The Shire theme (Lord of the Rings)</li>
          <li>Hedwig's Theme (Harry Potter)</li>
          <li>Indiana Jones' adventure theme</li>
        </ul>
        <p>
          Leitmotifs create continuity and can evolve throughout a film as characters change
          and develop.
        </p>
      </section>

      <Quiz
        questionId="q4-1"
        question="What is a leitmotif?"
        options={[
          'A type of instrument',
          'A recurring musical theme for a character or idea',
          'A loud musical climax',
          'A silent moment in film'
        ]}
        correctAnswer="A recurring musical theme for a character or idea"
      />

      <section className="content-section">
        <h2>Mickey Mousing</h2>
        <p>
          <strong>Mickey Mousing</strong> is when music directly mimics on-screen action.
          The term comes from early Disney cartoons where music matched every movement.
        </p>
        <p><strong>Examples:</strong></p>
        <ul>
          <li>Musical "boings" when characters jump</li>
          <li>Descending notes when someone falls</li>
          <li>Quick pizzicato strings for tip-toeing</li>
        </ul>
        <p>
          While often associated with comedy and animation, subtle mickey mousing appears
          in serious films toolike musical accents on punches in fight scenes.
        </p>
      </section>

      <section className="content-section">
        <h2>Tension & Release</h2>
        <p>
          The most powerful emotional tool in music is the cycle of <strong>tension and release</strong>.
        </p>
        <p><strong>Building tension:</strong></p>
        <ul>
          <li>Crescendos (getting louder)</li>
          <li>Rising pitch</li>
          <li>Increasing tempo</li>
          <li>Dissonant harmonies</li>
          <li>Repetitive patterns</li>
        </ul>
        <p><strong>Release:</strong></p>
        <ul>
          <li>Resolution to consonant chords</li>
          <li>Sudden silence</li>
          <li>Triumphant theme</li>
          <li>Return to calm</li>
        </ul>
        <p>
          Masters like Hans Zimmer build enormous tension over minutes, making the release
          incredibly satisfying (Inception's climax, Interstellar's docking scene).
        </p>
      </section>

      <Quiz
        questionId="q4-2"
        question="In Jaws, the two-note theme is an example of:"
        options={['Mickey Mousing', 'Leitmotif', 'Source music', 'Silence']}
        correctAnswer="Leitmotif"
      />

      <section className="content-section">
        <h2>The Power of Silence</h2>
        <p>
          Sometimes the most powerful choice is <strong>no music at all</strong>. Silence
          can be more impactful than any score.
        </p>
        <p><strong>When composers use silence:</strong></p>
        <ul>
          <li>To create discomfort or unease</li>
          <li>To force focus on dialogue or sound effects</li>
          <li>To make the return of music more powerful</li>
          <li>To heighten realism in tense scenes</li>
        </ul>
        <p>
          Example: The opening of "A Quiet Place" uses extended silence to build unbearable
          tension.
        </p>
      </section>

      <Quiz
        questionId="q4-3"
        question="True or False: Silence can be more powerful than music in certain scenes"
        options={['True', 'False']}
        correctAnswer="True"
      />

      <section className="content-section">
        <h2>Underscoring vs Source Music</h2>
        <p>
          <strong>Underscoring (non-diegetic music):</strong> Music only the audience hears.
          This is the traditional film score that accompanies scenes.
        </p>
        <p>
          <strong>Source music (diegetic music):</strong> Music that exists in the film's world
          playing on a radio, performed by characters, heard at a party, etc.
        </p>
        <p>
          Clever films blur this line. In "Baby Driver," source music drives the action.
          In "Guardians of the Galaxy," the soundtrack is literally a character's mixtape.
        </p>
      </section>

      <section className="content-section">
        <h2>Contrast: The Unexpected Choice</h2>
        <p>
          Using music that <strong>contrasts</strong> with on-screen action creates irony,
          dark humor, or disturbing juxtaposition.
        </p>
        <p><strong>Examples:</strong></p>
        <ul>
          <li>Happy music during violence (Tarantino films)</li>
          <li>Children's songs in horror scenes</li>
          <li>Classical music during chaos (A Clockwork Orange)</li>
          <li>Upbeat pop during tragedy</li>
        </ul>
        <p>
          This technique makes scenes memorable by subverting expectations.
        </p>
      </section>

      <Quiz
        questionId="q4-4"
        question="Which scene uses musical contrast effectively?"
        options={[
          'Happy music during a wedding',
          'Sad music during a funeral',
          'Upbeat music during a violent scene',
          'Heroic music during a victory'
        ]}
        correctAnswer="Upbeat music during a violent scene"
      />

      <Comments pageId="page4" />
    </div>
  );
}

export default TechniquesPage;
