import './pages.css';

function HomePage() {
  return (
    <div className="page home-page">
      <header className="hero">
        <h1>The Invisible Storyteller</h1>
        <h2>How Film Scores Shape Your Emotions</h2>
      </header>

      <section className="intro">
        <p>
          Film scores are the invisible storytellers of cinema. They guide your emotions,
          heighten tension, and create unforgettable momentsall without you consciously
          noticing. From the ominous two-note theme of Jaws to the sweeping orchestral
          grandeur of Star Wars, music transforms good films into great ones.
        </p>
        <p>
          But how exactly does this work? What musical elements trigger specific emotions?
          Why do certain instruments feel heroic while others sound sinister? This website
          will take you on a journey through the craft of film scoring, revealing the
          techniques composers use to manipulate your feelings and enhance storytelling.
        </p>
      </section>

      <section className="quick-fact">
        <h3>Did You Know?</h3>
        <p>
          Studies show that scenes with music are remembered 40% better than those without.
          Music doesn't just accompany the storyit becomes part of your memory of it.
        </p>
      </section>

      <section className="overview">
        <h3>What You'll Learn</h3>
        <ul>
          <li>How musical elements like tempo, key, and dynamics create specific emotions</li>
          <li>Why instrument choice matters and what different instruments convey</li>
          <li>The techniques composers use to build tension, create themes, and enhance narrative</li>
          <li>Analysis of iconic film scores and what makes them unforgettable</li>
          <li>How music shapes storytelling and creates cinematic magic</li>
        </ul>
      </section>

      <section className="navigation-prompt">
        <p>Ready to discover the secrets behind your favorite film scores? Use the navigation above to begin your journey.</p>
      </section>
    </div>
  );
}

export default HomePage;
