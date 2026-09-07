const reasons = [
  { number: '01', title: 'Modern, Purposeful Design', description: 'Websites that look modern while keeping the layout clear, useful and focused on the visitor.' },
  { number: '02', title: 'Mobile-First Experience', description: 'Responsive experiences that work comfortably across phones, tablets and desktops.' },
  { number: '03', title: 'Clear Communication', description: 'A straightforward process with decisions explained clearly and collaboration kept easy to understand.' },
  { number: '04', title: 'Business-Focused Thinking', description: 'Websites shaped around your goals, services, audience and desired next action—not visuals alone.' },
]

export default function WhyWorkWithMe() {
  return <section className="why section" id="why" aria-labelledby="why-title">
    <div className="container">
      <div className="why-intro">
        <p className="eyebrow">Why work with me</p>
        <h2 id="why-title">A website should look good—and make sense for your business.</h2>
        <p>Good websites bring visual quality, usability, responsiveness and business purpose together in one considered experience.</p>
      </div>
      <div className="reasons-grid">
        {reasons.map(({ number, title, description }) => <article className="reason" key={number}>
          <span>{number}</span>
          <h3>{title}</h3>
          <p>{description}</p>
        </article>)}
      </div>
    </div>
  </section>
}
