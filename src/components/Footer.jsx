const links = [['Home', '#home'], ['About', '#about'], ['Services', '#services'], ['Work', '#work'], ['Why Work With Me', '#why'], ['Process', '#process'], ['Tech Stack', '#stack'], ['Contact', '#contact']]

export default function Footer() {
  return <footer className="site-footer">
    <div className="container footer-grid">
      <div><a className="footer-wordmark" href="#home">Shahadat<span aria-hidden="true">.</span></a><p>Web Developer</p></div>
      <nav aria-label="Footer navigation"><ul>{links.map(([label, href]) => <li key={href}><a href={href}>{label}</a></li>)}</ul></nav>
      <address><a href="mailto:ansarish8880@gmail.com">ansarish8880@gmail.com</a><a href="tel:7217658640">7217658640</a></address>
    </div>
    <div className="container footer-bottom">© 2026 Shahadat. All rights reserved.</div>
  </footer>
}
