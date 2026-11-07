import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const experience = [
  {
    company: 'Microsoft',
    role: 'Software Engineer II',
    period: 'Aug 2021 - present',
    description: 'Working on service APIs, scheduling, testing, and reliability for Microsoft Planner and Project for the Web.',
    tags: ['Service APIs', 'Scheduling', 'Reliability'],
  },
  {
    company: 'Intuit',
    role: 'Software Engineer Intern',
    period: 'Jun - Sep 2020',
    description: 'Worked on QuickBooks Self-Employed with Java and Spring Boot REST APIs, Kafka, Angular, JavaScript, and Elasticsearch.',
    tags: ['Java / Spring Boot', 'Kafka', 'Angular'],
  },
  {
    company: 'Inovio',
    role: 'Engineering Intern',
    period: 'Jun - Jul 2019',
    description: 'Built tools using C++, Python, and SQL.',
    tags: ['C++', 'Python', 'SQL'],
  },
];

// Add only approved local photos and descriptive alt text here.
const personal = [
  { title: 'Snowboarding in Hokkaido', category: 'Outside', description: 'Away from the keyboard, on the snow in Hokkaido, Japan.', photo: '/photos/hokkaido.webp', alt: 'Alan holding a snowboard on a snowy slope in Hokkaido, with a mountain in the background.' },
  {
    title: 'Restoring a 1982 CJ-5',
    category: 'Hands-on',
    description: "A Jeep passed down by my dad, restored with my two older brothers. I kept it as original as possible, including the four-cylinder Iron Duke engine.",
    photo: '/photos/jeep-camping.webp',
    alt: 'Alan beside his white Jeep CJ-5 at a campsite in San Luis Gonzaga.',
    story: 'The rebuild covered the cooling system, carburetor, a full wiring harness, transmission and transfer case repairs, brakes, clutch hydraulics, dashboard, fuel system, suspension, steering, and the original wheels. I learned a lot along the way. Afterward, I drove from Calexico, California, through San Felipe, Baja California, to camp in San Luis Gonzaga.',
    gallery: [
      { photo: '/photos/jeep-before.webp', alt: 'The Jeep before restoration, without doors or a finished interior.', caption: 'Before the rebuild' },
      { photo: '/photos/jeep-rebuild.webp', alt: 'Work in progress on the stripped-down Jeep CJ-5 in a workshop.', caption: 'Work in progress' },
      { photo: '/photos/jeep-engine.webp', alt: 'The Jeep engine bay during the restoration.', caption: 'Under the hood' },
      { photo: '/photos/jeep-after.webp', alt: 'The restored white CJ-5 with its black doors and finished dashboard.', caption: 'Back together' },
    ],
  },
  { title: 'Padel, with my brother', category: 'On the court', description: "Second place in men's fourth division, playing alongside my oldest brother.", photo: '/photos/padel.webp', alt: 'Alan and his older brother holding their padel prizes, with a trophy in front of them.' },
  { title: 'HPI Baja 5B', category: 'Back on the bench', description: "Rebuilding the gas-powered RC car I've had since I was a kid.", photo: '/photos/baja.webp', alt: 'An orange HPI Baja 5B RC buggy outdoors.' },
];

function Arrow({ diagonal = false }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
      <path d={diagonal ? 'M6 18 18 6M6 6h12v12' : 'M4 12h16m-6-6 6 6-6 6'} stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header" onKeyDown={(event) => {
        if (event.key === 'Escape' && menuOpen) {
          event.preventDefault();
          closeMenu();
          document.getElementById('menu-button')?.focus();
        }
      }}>
        <div className="header-inner">
          <a className="wordmark" href="#home" aria-label="Alan Madrigal, home" onClick={closeMenu}>
            <span className="logo" aria-hidden="true">am<span>.</span></span>
            <span>Alan Madrigal</span>
          </a>
          <button id="menu-button" className="menu-button" aria-expanded={menuOpen} aria-controls="site-nav" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? 'Close menu' : 'Menu'} <span aria-hidden="true">{menuOpen ? '-' : '+'}</span>
          </button>
          <nav id="site-nav" className={menuOpen ? 'navigation is-open' : 'navigation'} aria-label="Main navigation">
            <a href="#work" onClick={closeMenu}>Work</a>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#outside" onClick={closeMenu}>Outside of code</a>
            <a className="nav-contact" href="#connect" onClick={closeMenu}>Say hello <Arrow diagonal /></a>
          </nav>
        </div>
      </header>

      <main id="main">
        <section id="home" className="hero section-width" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot" /> Engineer. Builder. Always curious.</p>
            <h1 id="hero-title">Hi, I'm Alan.<br />I like to <span className="highlight">build things.</span></h1>
            <p className="hero-description">Software engineer at Microsoft, UC San Diego graduate, and a hands-on builder. From service APIs to a CJ-5, this is a little of what keeps me busy.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">Explore my work <Arrow /></a>
              <a className="text-link" href="https://github.com/alanmc979" target="_blank" rel="noreferrer">GitHub <Arrow diagonal /><span className="sr-only"> (opens in a new tab)</span></a>
            </div>
          </div>
          <div className="hero-art" aria-hidden="true">
            <div className="art-orbit orbit-one" />
            <div className="art-orbit orbit-two" />
            <span className="art-spark spark-one">+</span>
            <span className="art-spark spark-two">+</span>
            <div className="monogram">am<span>.</span></div>
            <div className="art-label"><span /> A work in progress, in the best way.</div>
          </div>
          <div className="hero-footnote"><span>Software &amp; everything in between</span><a href="#work">Take a look below <span aria-hidden="true">&#8595;</span></a></div>
        </section>

        <section id="work" className="section-width section-space" aria-labelledby="work-title">
          <div className="section-heading">
            <div><p className="eyebrow">01 / Selected work</p><h2 id="work-title">Built with purpose.</h2></div>
            <p>A personal project, rooted in a real family business.</p>
          </div>
          <article className="project-card">
            <div className="project-visual" aria-hidden="true">
              <span className="visual-label">FROM IDEA TO IMPLEMENTATION</span>
              <div className="parking-symbol">P<span /></div>
              <div className="architecture"><span>React</span><i /><span>Python</span><i /><span>Stripe</span></div>
              <span className="visual-caption">A connected parking experience</span>
            </div>
            <div className="project-copy">
              <p className="eyebrow">Personal project / Co-developed</p>
              <h3>Parking, made simpler.</h3>
              <p>A parking application for a family business, connecting a React frontend with a Python backend, a database, and Stripe payments.</p>
              <div className="tags"><span>React</span><span>Python</span><span>Stripe</span><span>Database</span></div>
              <details>
                <summary>Under the hood <span aria-hidden="true">+</span></summary>
                <p>The frontend, backend, data, and payment integration come together in one application. I co-developed this project for our family business.</p>
              </details>
            </div>
          </article>
        </section>

        <section id="about" className="section-width section-space about-section" aria-labelledby="about-title">
          <div className="about-intro">
            <p className="eyebrow">02 / A little background</p>
            <h2 id="about-title">An engineer.<br />A hands-on mindset.</h2>
            <p>My work spans service APIs, scheduling, testing, and reliability. I also enjoy building outside of work, from a family-business application to my CJ-5 project.</p>
            <div className="education"><span className="education-mark" aria-hidden="true">UC</span><div><strong>UC San Diego</strong><span>BS, Computer Engineering</span><span>June 2021</span></div></div>
          </div>
          <div className="experience-list" aria-label="Professional experience">
            {experience.map((job) => (
              <article className="experience-item" key={job.company}>
                <div className="experience-top"><h3>{job.company}</h3><span>{job.period}</span></div>
                <p className="job-role">{job.role}</p>
                <p>{job.description}</p>
                <div className="tags">{job.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              </article>
            ))}
          </div>
        </section>

        <section id="outside" className="outside-section" aria-labelledby="outside-title">
          <div className="section-width section-space">
            <div className="section-heading">
              <div><p className="eyebrow">03 / Outside of code</p><h2 id="outside-title">Not everything needs a screen.</h2></div>
              <p>On the snow. On the court. In the garage.</p>
            </div>
            <div className="interest-grid">
              {personal.map((interest, index) => (
                <article className={`interest-card interest-${index}`} key={interest.title}>
                  {interest.photo && <img src={interest.photo} alt={interest.alt} loading="lazy" width="960" height="640" />}
                  <div className="interest-content">
                    <div className="interest-top"><span className="eyebrow">{interest.category}</span><span className="interest-number" aria-hidden="true">0{index + 1}</span></div>
                    <h3>{interest.title}</h3>
                    <p>{interest.description}</p>
                    {interest.story && <details><summary>The restoration story <span aria-hidden="true">+</span></summary><p>{interest.story}</p><div className="restoration-gallery">{interest.gallery.map((image) => <figure key={image.photo}><img src={image.photo} alt={image.alt} loading="lazy" width="800" height="600" /><figcaption>{image.caption}</figcaption></figure>)}</div></details>}
                  </div>
                </article>
              ))}
            </div>
            <aside className="next-project" aria-labelledby="next-project-title">
              <img src="/photos/model-a.webp" alt="The dark green 1930 Ford Model A parked with its yellow wire-spoke wheels." loading="lazy" width="450" height="432" />
              <div><p className="eyebrow">Next on the workbench</p><h3 id="next-project-title">A 1930 Ford Model A.</h3><p>Another car passed down by my dad. It used to run, but after a long time in the garage, it needs some maintenance before it's back on the road. That's the next project.</p><span className="next-badge">Up next</span></div>
            </aside>
          </div>
        </section>

        <section id="connect" className="section-width connect-section" aria-labelledby="connect-title">
          <p className="eyebrow">04 / Keep in touch</p>
          <h2 id="connect-title">Good things start<br />with a <span>hello.</span></h2>
          <p>Find me on GitHub or connect on LinkedIn.</p>
          <div className="connect-links">
            <a className="button button-primary" href="https://www.linkedin.com/in/alanmadrigal" target="_blank" rel="noreferrer">Connect on LinkedIn <Arrow diagonal /><span className="sr-only"> (opens in a new tab)</span></a>
            <a className="button button-outline" href="https://github.com/alanmc979" target="_blank" rel="noreferrer">Explore GitHub <Arrow diagonal /><span className="sr-only"> (opens in a new tab)</span></a>
          </div>
        </section>
      </main>
      <footer className="section-width site-footer"><a className="wordmark" href="#home">Alan Madrigal<span className="footer-dot" aria-hidden="true">.</span></a><span>Engineering. Building. Exploring.</span><a href="#home">Back to top <span aria-hidden="true">&#8593;</span></a></footer>
    </>
  );
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>);
