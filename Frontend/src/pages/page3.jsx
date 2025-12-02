import Quiz from '../components/Quiz';
import Comments from '../components/Comments';
import YouTubeEmbed from '../components/YouTubeEmbed';
import './pages.css';

function InstrumentationPage() {
  return (
    <div className="page instrumentation-page">
      <h1>Instrumentation & Mood</h1>

      <section className="intro">
        <p>
          The choice of instruments is one of the most powerful tools in a composer's arsenal.
          Each instrument carries its own emotional weight and cultural associations, allowing
          composers to paint specific moods with their sonic palette.
        </p>
      </section>

      <section className="content-section">
        <h2>Orchestral Instruments</h2>

        <h3>Strings</h3>
        <p>
          Violins, violas, cellos, and basses are incredibly versatile. They can convey:
        </p>
        <ul>
          <li><strong>Romance:</strong> Lush, sweeping string sections (Titanic)</li>
          <li><strong>Sadness:</strong> Solo violin or cello (Schindler's List)</li>
          <li><strong>Tension:</strong> Tremolo strings, dissonant chords (Psycho shower scene)</li>
        </ul>

        <h3>Brass</h3>
        <p>
          Trumpets, trombones, French horns, and tubas project power:
        </p>
        <ul>
          <li><strong>Heroism:</strong> Triumphant trumpet fanfares (Star Wars)</li>
          <li><strong>Grandeur:</strong> Full brass section (Lord of the Rings)</li>
          <li><strong>Danger:</strong> Low brass, dissonant harmonies (Jaws)</li>
        </ul>

        <h3>Woodwinds</h3>
        <p>
          Flutes, clarinets, oboes, and bassoons add color and character:
        </p>
        <ul>
          <li><strong>Whimsy:</strong> Playful flute melodies (Harry Potter)</li>
          <li><strong>Nature:</strong> Pastoral woodwind solos (Shire theme)</li>
          <li><strong>Mystery:</strong> Haunting oboe or clarinet (fantasy films)</li>
        </ul>

        <h3>Percussion</h3>
        <p>
          Drums, cymbals, and timpani drive rhythm and intensity:
        </p>
        <ul>
          <li><strong>Action:</strong> Driving drum patterns (Mad Max: Fury Road)</li>
          <li><strong>Urgency:</strong> Quick percussion hits (Mission: Impossible)</li>
          <li><strong>Impact:</strong> Cymbal crashes at dramatic moments</li>
        </ul>

        <YouTubeEmbed
          videoId="saalGKY7ifU"
          title="Titanic - My Heart Will Go On (Strings for Romance)"
        />
      </section>

      <Quiz
        questionId="q3-1"
        question="Which instrument family is most often used for romantic scenes?"
        options={['Brass', 'Strings', 'Percussion', 'Woodwinds']}
        correctAnswer="Strings"
      />

      <section className="content-section">
        <h2>Electronic vs Orchestral</h2>
        <p>
          <strong>Orchestral scores</strong> feel timeless, emotional, and human. They're
          perfect for historical epics, fantasy, and emotional dramas.
        </p>
        <p>
          <strong>Electronic/synthetic scores</strong> sound modern, otherworldly, or futuristic.
          Composers choose synths for:
        </p>
        <ul>
          <li>Science fiction (Blade Runner, Tron)</li>
          <li>Modern thrillers (The Social Network)</li>
          <li>Psychological horror (It Follows)</li>
        </ul>
        <p>
          Many modern scores blend bothorchestral warmth with electronic edge (Inception,
          Interstellar).
        </p>

        <YouTubeEmbed
          videoId="mpMg1upld0w"
          title="Terminator - Main Theme (Electronic/Synth Score)"
        />
      </section>

      <Quiz
        questionId="q3-2"
        question="What type of score works best for a space thriller?"
        options={['Full orchestra', 'Electronic synths', 'Solo piano', 'Jazz ensemble']}
        correctAnswer="Electronic synths"
      />

      <section className="content-section">
        <h2>Cultural Instruments</h2>
        <p>
          Specific instruments instantly evoke place and culture:
        </p>
        <ul>
          <li><strong>Sitar:</strong> India (Slumdog Millionaire)</li>
          <li><strong>Taiko drums:</strong> Japan (The Last Samurai)</li>
          <li><strong>Bagpipes:</strong> Scotland (Braveheart)</li>
          <li><strong>Duduk:</strong> Middle East (Gladiator)</li>
          <li><strong>Pan flute:</strong> South America (The Mission)</li>
        </ul>
        <p>
          These instruments help establish authentic settings and honor cultural identity.
        </p>
      </section>

      <section className="content-section">
        <h2>Sound Design Integration</h2>
        <p>
          The line between music and sound effects often blurs. Composers use:
        </p>
        <ul>
          <li>Processed sounds that become musical (Inception's BRAAAM)</li>
          <li>Instruments played unconventionally (hitting piano strings)</li>
          <li>Ambient textures that create atmosphere</li>
        </ul>
        <p>
          This integration makes the score feel organic to the film's world.
        </p>
      </section>

      <Quiz
        questionId="q3-3"
        question="Match the concept: A composer uses brass instruments to create which mood?"
        options={['Whimsy', 'Heroism', 'Sadness', 'Mystery']}
        correctAnswer="Heroism"
      />

      <Comments pageId="page3" />
    </div>
  );
}

export default InstrumentationPage;
