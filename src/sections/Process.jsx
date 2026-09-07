const steps = [
  { number: '01', title: 'Discover', description: 'Understand the business, audience, goals, services and what the website needs to achieve.' },
  { number: '02', title: 'Plan', description: 'Define the page structure, content direction, visual approach and key user actions.' },
  { number: '03', title: 'Design & Build', description: 'Create the website with responsive layouts, clear presentation and a polished user experience.' },
  { number: '04', title: 'Review', description: 'Review the website, gather feedback and refine the details where needed.' },
  { number: '05', title: 'Launch', description: 'Prepare the final website for launch and make sure the essential details are ready.' },
]

export default function Process() {
  return <section className="process section" id="process" aria-labelledby="process-title">
    <div className="container">
      <div className="process-intro">
        <p className="eyebrow">The process</p>
        <h2 id="process-title">A simple path from idea to launch.</h2>
        <p>A clear, collaborative process designed to make each stage of the project easy to follow.</p>
      </div>
      <ol className="process-steps">
        {steps.map(({ number, title, description }) => <li key={number}>
          <span className="process-number">{number}</span>
          <h3>{title}</h3>
          <p>{description}</p>
        </li>)}
      </ol>
    </div>
  </section>
}
