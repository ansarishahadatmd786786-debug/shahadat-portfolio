const services = [
  { number: '01', title: 'Business Websites', description: 'Modern responsive websites designed to give businesses a professional online presence.' },
  { number: '02', title: 'Landing Pages', description: 'Focused pages designed around a specific service, campaign, offer or conversion goal.' },
  { number: '03', title: 'Website Redesign', description: 'Modernizing outdated websites with improved visual presentation, responsiveness and usability.' },
  { number: '04', title: 'Website Maintenance', description: 'Ongoing website updates, content changes and basic maintenance support.' },
]

export default function Services() {
  return <section className="services section" id="services" aria-labelledby="services-title">
    <div className="container">
      <div className="section-intro">
        <p className="eyebrow">Services</p>
        <h2 id="services-title">What I can help you build.</h2>
        <p>Practical website services for businesses that need a considered, professional presence online.</p>
      </div>
      <div className="services-grid">
        {services.map(({ number, title, description }) => <article className="service-card" key={number}>
          <span className="service-number">{number}</span>
          <h3>{title}</h3>
          <p>{description}</p>
        </article>)}
      </div>
    </div>
  </section>
}
