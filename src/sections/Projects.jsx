const projects = [
  {
    name: 'SmileCraft Dental', category: 'Dental Clinic Website', theme: 'health',
    description: 'Premium dental clinic website concept designed to build patient trust, showcase services and doctors, and make appointment enquiries simple and accessible.',
    url: 'https://premium-dental-clinic-website-psi.vercel.app/',
  },
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
  {
    name: 'AURELIA ESTATES', category: 'Real Estate Website', theme: 'realestate',
    description: 'Premium real estate website concept designed to showcase luxury properties, locations, services, and enquiries through a polished and immersive digital experience.',
    url: 'https://aurelia-estates-azure-three.vercel.app/',
  },
  {
    name: 'VERITAS LEGAL', category: 'Law Firm Website', theme: 'law',
    description: 'Sophisticated law firm website concept designed to communicate trust, clarity, and professionalism through practice areas, attorneys, insights, and consultation-focused experiences.',
    url: 'https://veritas-legal-two.vercel.app/',
  },
  {
    name: 'AURORA THREADS', category: 'Fashion & E-commerce Website',
    theme: 'fashion',
    description: 'Premium fashion e-commerce website concept designed to showcase curated collections, products, fabrics, and a refined shopping experience across desktop and mobile.',
    url: 'https://aurora-threads-orcin.vercel.app/',
  },
  {
  name: 'AURELIA GRAND RESORT',
  category: 'Luxury Resort Website',
  theme: 'resort',
  description: 'Immersive luxury resort website concept featuring a cinematic 3D hero experience, premium rooms and villas, experiences, dining, wellness, gallery, and responsive booking-focused journeys.',
  url: 'https://aurelia-grand-resort-six.vercel.app/',
},
  {
    name: 'LUMIÈRE PHOTOGRAPHY', category: 'PHOTOGRAPHY WEBSITE', image: '/images/lumiere-photography-home.png',
    description: 'Premium photography studio website concept featuring immersive 3D visuals, service discovery, booking flows, gallery experiences, and a complete demo shopping journey.',
    url: 'https://premium-3d-photography-website.vercel.app/',
  },
]

function ProjectPreview({ name, theme, image }) {
  return <div className={`project-preview${theme ? ` preview-${theme}` : ''}`} aria-hidden="true">
    <div className="preview-bar"><span></span><span></span><span></span><i></i></div>
    {image ? <div className="preview-canvas" style={{ padding: 0 }}>
      <img src={image} alt="" style={{ display: 'block', height: '100%', objectFit: 'cover', objectPosition: 'center top', width: '100%' }} />
    </div> : <div className="preview-canvas">
      <div className="preview-nav"><b>{name}</b><i></i><i></i></div>
      <div className="preview-hero-shape"></div>
      <div className="preview-copy-lines"><i></i><i></i><i></i></div>
      <div className="preview-action"></div>
      <div className="preview-tiles"><i></i><i></i><i></i></div>
    </div>}
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
        {projects.map(({ name, category, theme, image, description, url }, index) => <article className={`project-card project-${index + 1}`} key={name}>
          <ProjectPreview name={name} theme={theme} image={image} />
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
