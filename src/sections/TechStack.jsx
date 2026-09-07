const stackGroups = [
  { title: 'Frontend', tools: ['HTML', 'CSS', 'JavaScript', 'React'] },
  { title: 'Development', tools: ['Vite', 'Git'] },
  { title: 'Deployment', tools: ['GitHub', 'Vercel'] },
]

export default function TechStack() {
  return <section className="stack section" id="stack" aria-labelledby="stack-title">
    <div className="container">
      <div className="stack-intro">
        <p className="eyebrow">Tech stack</p>
        <h2 id="stack-title">The tools behind the build.</h2>
        <p>Tools I use to design, build, version and deploy modern websites.</p>
      </div>
      <div className="stack-groups">
        {stackGroups.map(({ title, tools }) => <section className="stack-group" key={title} aria-labelledby={`${title.toLowerCase()}-title`}>
          <h3 id={`${title.toLowerCase()}-title`}>{title}</h3>
          <ul>{tools.map((tool) => <li key={tool}>{tool}</li>)}</ul>
        </section>)}
      </div>
    </div>
  </section>
}
