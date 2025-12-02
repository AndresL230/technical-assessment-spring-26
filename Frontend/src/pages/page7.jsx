import Quiz from '../components/Quiz';
import Comments from '../components/Comments';
import YouTubeEmbed from '../components/YouTubeEmbed';
import './pages.css';

function PowerOfScorePage() {
  return (
    <div className="page power-page">
      <h1>The Power of Score in Storytelling</h1>

      <section className="intro">
        <p>
          We've explored the elements, instruments, and techniques of film scoring. Now
          let's examine the ultimate impact: how music transforms cinema and creates the
          moments that stay with us forever.
        </p>
      </section>

      <section className="content-section">
        <h2>Making Iconic Moments</h2>
        <p>
          Certain scenes are <strong>inseparable from their music</strong>. Try to imagine
          these moments without their scores:
        </p>
        <ul>
          <li><strong>Darth Vader's entrance:</strong> The Imperial March makes him terrifying</li>
          <li><strong>Jaws' first attack:</strong> Two notes create primal fear</li>
          <li><strong>E.T. flying across the moon:</strong> Williams' soaring theme creates magic</li>
          <li><strong>Rocky running up the steps:</strong> "Gonna Fly Now" makes it triumphant</li>
          <li><strong>Psycho shower scene:</strong> Screeching violins make it horrifying</li>
          <li><strong>2001: A Space Odyssey opening:</strong> Strauss makes cosmic evolution majestic</li>
        </ul>
        <p>
          These scenes would still exist without music, but they wouldn't be <em>iconic</em>.
          The music makes them unforgettable.
        </p>

        <YouTubeEmbed
          videoId="ioE_O7Lm0I4"
          title="Rocky - Gonna Fly Now (Iconic Scene)"
        />
      </section>

      <Quiz
        questionId="q7-1"
        question="Which scene is iconic largely because of its music?"
        options={[
          'A character eating breakfast',
          'Darth Vader\'s entrance with the Imperial March',
          'A random crowd scene',
          'Someone walking down a hallway'
        ]}
        correctAnswer="Darth Vader's entrance with the Imperial March"
      />

      <section className="content-section">
        <h2>Saving Weak Scenes</h2>
        <p>
          Great music can <strong>elevate mediocre footage</strong> into something memorable.
          Composers often rescue scenes that don't quite work on their own.
        </p>
        <p><strong>How music saves scenes:</strong></p>
        <ul>
          <li><strong>Adding emotion:</strong> Music supplies feeling that acting/directing missed</li>
          <li><strong>Creating tension:</strong> Score makes boring scenes suspenseful</li>
          <li><strong>Improving pacing:</strong> Rhythm fixes sluggish editing</li>
          <li><strong>Focusing attention:</strong> Music directs viewers where to look/feel</li>
        </ul>
        <p>
          As the saying goes: "If the scene is working, the music should be invisible. If
          the scene isn't working, the music should save it."
        </p>
      </section>

      <Quiz
        questionId="q7-2"
        question="How can music 'save' a weak scene?"
        options={[
          'By being louder than dialogue',
          'By adding emotional depth and tension that the visuals lack',
          'By distracting from bad acting',
          'By making the scene longer'
        ]}
        correctAnswer="By adding emotional depth and tension that the visuals lack"
      />

      <section className="content-section">
        <h2>Pacing & Rhythm: The Film's Heartbeat</h2>
        <p>
          Music provides the <strong>pulse and rhythm</strong> that drives narrative momentum.
        </p>
        <p>
          A film editor once said, "I don't cut to pictureI cut to music." The score
          tells them where scenes should begin and end, when to linger, when to rush.
        </p>
        <p><strong>Musical pacing control:</strong></p>
        <ul>
          <li>Fast tempo increases urgency and excitement</li>
          <li>Slow tempo allows emotional processing</li>
          <li>Silence creates breathing room and emphasis</li>
          <li>Rhythm guides editing patterns</li>
        </ul>
      </section>

      <section className="content-section">
        <h2>Guiding Audience Attention</h2>
        <p>
          Music is a <strong>psychological guide</strong> that tells audiences where to focus
          and what to feel.
        </p>
        <p>
          When music swells, we know something important is happening. When it goes quiet,
          we lean in. When it turns ominous, we prepare for danger. This guidance happens
          below conscious awarenesswe don't think about it, we just respond.
        </p>
      </section>

      <section className="content-section">
        <h2>Cultural Legacy</h2>
        <p>
          Some films are <strong>remembered more for their scores</strong> than their stories.
        </p>
        <p><strong>Scores that transcended their films:</strong></p>
        <ul>
          <li><strong>Chariots of Fire:</strong> Vangelis' synth theme is instantly recognizable</li>
          <li><strong>The Good, the Bad and the Ugly:</strong> Morricone's whistling theme</li>
          <li><strong>Titanic:</strong> "My Heart Will Go On" became bigger than the film</li>
          <li><strong>Pirates of the Caribbean:</strong> "He's a Pirate" defines adventure</li>
        </ul>
        <p>
          These scores entered popular culture, used in commercials, sports arenas, memes,
          and everyday life. They became part of our shared cultural language.
        </p>
      </section>

      <Quiz
        questionId="q7-3"
        question="True or False: Some films are remembered more for their scores than their stories"
        options={['True', 'False']}
        correctAnswer="True"
      />

      <section className="content-section">
        <h2>Director-Composer Collaborations</h2>
        <p>
          The greatest film music comes from <strong>long-term creative partnerships</strong>
          where director and composer develop a shared language.
        </p>
        <p><strong>Famous collaborations:</strong></p>
        <ul>
          <li><strong>Steven Spielberg & John Williams:</strong> 30+ films including Jaws, Star Wars, Indiana Jones, E.T.</li>
          <li><strong>Christopher Nolan & Hans Zimmer:</strong> Dark Knight trilogy, Inception, Interstellar, Dunkirk</li>
          <li><strong>Sergio Leone & Ennio Morricone:</strong> Spaghetti westerns that redefined the genre</li>
          <li><strong>Tim Burton & Danny Elfman:</strong> Batman, Edward Scissorhands, Nightmare Before Christmas</li>
          <li><strong>Peter Jackson & Howard Shore:</strong> Lord of the Rings and Hobbit trilogies</li>
        </ul>
        <p>
          These partnerships create signature soundsyou can often identify the director
          just by hearing the score.
        </p>
      </section>

      <Quiz
        questionId="q7-4"
        question="Which director-composer duo is most famous?"
        options={[
          'Spielberg & Williams',
          'Tarantino & Morricone',
          'Nolan & Zimmer',
          'All of the above'
        ]}
        correctAnswer="All of the above"
      />

      <section className="content-section">
        <h2>The Future of Film Scoring</h2>
        <p>
          Film music continues to evolve with new technologies and creative approaches:
        </p>
        <ul>
          <li><strong>AI assistance:</strong> Tools that help composers experiment faster (but won't replace human creativity)</li>
          <li><strong>Interactive scores:</strong> Music that responds to viewer choices in streaming content</li>
          <li><strong>Spatial audio:</strong> Immersive sound that surrounds audiences in theaters and at home</li>
          <li><strong>Genre blending:</strong> Mixing orchestral, electronic, ethnic, and experimental sounds</li>
          <li><strong>New platforms:</strong> Scoring for VR experiences and video games blurring with film</li>
        </ul>
        <p>
          Despite technological changes, the fundamental purpose remains: to enhance story
          and evoke emotion.
        </p>
      </section>

      <section className="conclusion">
        <h2>Why Film Scores Matter</h2>
        <p>
          Film music is the invisible storytellerthe emotional voice that speaks directly
          to our hearts without words. It makes us cry, cheer, gasp, and remember. It
          transforms images on a screen into experiences that stay with us for life.
        </p>
        <p>
          Next time you watch a film, pay attention to the score. Notice how it guides
          your feelings, builds tension, creates themes, and enhances every moment. You'll
          discover a whole new dimension to cinemaone that's been working its magic on
          you all along.
        </p>
        <p>
          The best film scores don't call attention to themselves. They simply make you
          <em>feel</em>. And that's the ultimate power of music in storytelling.
        </p>
      </section>

      <Comments pageId="page7" />
    </div>
  );
}

export default PowerOfScorePage;
