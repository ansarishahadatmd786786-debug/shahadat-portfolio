const projects = [
  {
    name: 'VelaCare Health', category: 'Healthcare Website', theme: 'health',
    description: 'Modern healthcare website concept focused on clear information, approachable presentation, and responsive user experience.',
    url: 'https://hospital-demo-coral.vercel.app/',
  },
  {
    name: 'EMBER & SPICE', category: 'Restaurant Website', theme: 'restaurant',
    description: 'Premium restaurant website concept designed to create a strong visual identity and make the dining experience feel memorable online.',
    url: 'https://restaurant-cafe-demo1.vercel.app/',
  },
  {
    name: 'LUMÉA', category: 'Beauty & Wellness Website', theme: 'beauty',
    description: 'Elegant beauty and wellness website concept with a refined visual style, clear service presentation, and responsive layout.',
    url: 'https://salon-beauty-demo-rho.vercel.app/',
  },
  {
    name: 'IRONVAULT FITNESS', category: 'Fitness Website', theme: 'fitness',
    description: 'Bold fitness website concept built around strong visual presentation, clear service information, and a motivating digital experience.',
    url: 'https://ironvault-fitness-coral.vercel.app/',
  },
  {
    name: 'NEXORA ACADEMY', category: 'Education Website', theme: 'education',
    description: 'Modern coaching and education website concept designed to present courses, faculty, results, schedules, and enquiries clearly.',
    url: 'https://nexora-academy-swart.vercel.app/',
  },
]

function ProjectPreview({ name, theme }) {
  return <div className={`project-preview preview-${theme}`} aria-hidden="true">
    <div className="preview-bar"><span></span><span></span><span></span><i></i></div>
    <div className="preview-canvas">
      <div className="preview-nav"><b>{name}</b><i></i><i></i></div>
      <div className="preview-hero-shape"></div>
      <div className="preview-copy-lines"><i></i><i></i><i></i></div>
      <div className="preview-action"></div>
      <div className="preview-tiles"><i></i><i></i><i></i></div>
    </div>
  </div>
}

export default function Projects() {
  return <section className="projects section" id="work" aria-labelledby="work-title">
    <div className="container">
      <div className="projects-intro">
        <p className="eyebrow">Selected work</p>
        <h2 id="work-title">Websites built to make businesses stand out.</h2>
        <p>A selection of fictional demo projects exploring different industries, business goals, and visual directions.</p>
      </div>
      <div className="projects-grid">
        {projects.map(({ name, category, theme, description, url }, index) => <article className={`project-card project-${index + 1}`} key={name}>
          <ProjectPreview name={name} theme={theme} />
          <div className="project-details">
            <div className="project-meta"><span>{category}</span><span className="demo-badge">Demo Project</span></div>
            <h3>{name}</h3>
            <p>{description}</p>
            <a className="project-link" href={url} target="_blank" rel="noreferrer" aria-label={`View the live ${name} demo site (opens in a new tab)`}>View Live Site <span aria-hidden="true">↗</span></a>
          </div>
        </article>)}
      </div>
    </div>
  </section>
}
