import Quiz from '../components/Quiz';
import Comments from '../components/Comments';
import YouTubeEmbed from '../components/YouTubeEmbed';
import './pages.css';

function NarrativePage() {
  return (
    <div className="page narrative-page">
      <h1>Enhancing the Narrative</h1>

      <section className="intro">
        <p>
          Music isn't just decorationit's a fundamental storytelling tool. Composers work
          closely with directors to shape narrative, develop characters, and create cohesive
          cinematic experiences.
        </p>
      </section>

      <section className="content-section">
        <h2>Creating Continuity</h2>
        <p>
          Film scores create <strong>musical continuity</strong> that links scenes, sequences,
          and even entire films together.
        </p>
        <p><strong>How music creates flow:</strong></p>
        <ul>
          <li><strong>Scene transitions:</strong> Music bridges cuts and location changes</li>
          <li><strong>Montages:</strong> Score unifies disparate images into coherent sequence</li>
          <li><strong>Callbacks:</strong> Returning themes remind us of earlier moments</li>
          <li><strong>Saga continuity:</strong> Recurring themes across sequels (Marvel, Star Wars)</li>
        </ul>
        <p>
          Without this musical thread, films would feel choppy and disconnected. The score
          is the invisible glue holding everything together.
        </p>
      </section>

      <section className="content-section">
        <h2>Character Development Through Music</h2>
        <p>
          Musical themes can <strong>evolve with characters</strong>, showing their growth,
          corruption, or transformation.
        </p>
        <p><strong>Examples of evolving themes:</strong></p>
        <ul>
          <li><strong>Anakin to Darth Vader:</strong> Innocent theme becomes the Imperial March</li>
          <li><strong>Frodo's journey:</strong> Shire theme becomes darker, more burdened</li>
          <li><strong>The Joker's chaos:</strong> Escalating dissonance as madness grows</li>
          <li><strong>Thor's maturity:</strong> Theme gains depth across MCU films</li>
        </ul>
        <p>
          This musical character development happens subconsciously, but powerfully affects
          how we perceive character arcs.
        </p>

        <YouTubeEmbed
          videoId="IlmiRndxkU8"
          title="The Shire Theme - Lord of the Rings (Character Journey)"
        />
      </section>

      <Quiz
        questionId="q6-1"
        question="How does a character's leitmotif changing help storytelling?"
        options={[
          'It makes the music more interesting',
          'It reflects character growth and transformation',
          'It saves money on composition',
          'It confuses the audience'
        ]}
        correctAnswer="It reflects character growth and transformation"
      />

      <section className="content-section">
        <h2>Foreshadowing: Musical Hints</h2>
        <p>
          Clever composers plant <strong>musical seeds</strong> that hint at future events,
          often unnoticed on first viewing.
        </p>
        <p><strong>Foreshadowing techniques:</strong></p>
        <ul>
          <li><strong>Subtle theme introduction:</strong> Villain's motif hidden in early scenes</li>
          <li><strong>Harmonic hints:</strong> Musical tension before revealed betrayal</li>
          <li><strong>Thematic fragments:</strong> Pieces of important themes appear early</li>
          <li><strong>Emotional preparation:</strong> Music signals something before we see it</li>
        </ul>
        <p>
          Example: In "The Sixth Sense," subtle musical cues hint at the twist ending throughout
          the film.
        </p>
      </section>

      <Quiz
        questionId="q6-2"
        question="What narrative function does music serve when it hints at future events?"
        options={['Establishing character', 'Foreshadowing', 'World-building', 'Comic relief']}
        correctAnswer="Foreshadowing"
      />

      <section className="content-section">
        <h2>Establishing Time & Place</h2>
        <p>
          Music instantly communicates <strong>when and where</strong> a story takes place.
        </p>
        <p><strong>Period establishment:</strong></p>
        <ul>
          <li><strong>Medieval:</strong> Gregorian chants, period instruments (Kingdom of Heaven)</li>
          <li><strong>1920s:</strong> Jazz and big band (The Great Gatsby)</li>
          <li><strong>1980s:</strong> Synth-heavy scores (Stranger Things)</li>
          <li><strong>Future:</strong> Electronic, experimental sounds (Blade Runner)</li>
        </ul>
        <p><strong>Location establishment:</strong></p>
        <ul>
          <li>Cultural instruments for authentic settings</li>
          <li>Musical styles characteristic of regions</li>
          <li>Language of music matches language of place</li>
        </ul>
      </section>

      <Quiz
        questionId="q6-3"
        question="In Lord of the Rings, the Shire theme helps establish:"
        options={['Character', 'Place', 'Time period', 'Conflict']}
        correctAnswer="Place"
      />

      <section className="content-section">
        <h2>World-Building: Sonic Identity</h2>
        <p>
          Fantasy and sci-fi films need music to <strong>create believable worlds</strong>
          with their own sonic signatures.
        </p>
        <p><strong>How music builds worlds:</strong></p>
        <ul>
          <li><strong>Unique instrumentation:</strong> Inventing sounds for alien cultures</li>
          <li><strong>Musical languages:</strong> Different themes for different races/planets</li>
          <li><strong>Consistent logic:</strong> Musical rules that define the world</li>
          <li><strong>Cultural depth:</strong> Implying history and tradition through music</li>
        </ul>
        <p>
          Examples: The Avatar films created entire musical languages for Pandora. Dune's
          score uses invented instruments to suggest millennia-old cultures.
        </p>
      </section>

      <section className="content-section">
        <h2>Emotional Anchoring</h2>
        <p>
          Music creates <strong>emotional anchors</strong>associations between themes and
          specific feelings that persist throughout (and beyond) the film.
        </p>
        <p>
          When a theme returns, it brings all the emotional weight of previous scenes with
          it. This is why hearing the Jurassic Park theme makes you feel wonder, or why the
          Up theme can make you cry even out of context.
        </p>
        <p>
          This emotional programming is one of music's most powerful narrative toolsit
          tells us how to feel without a single word.
        </p>
      </section>

      <Comments pageId="page6" />
    </div>
  );
}

export default NarrativePage;
