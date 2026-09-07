import { useEffect, useState } from 'react'

const links = [
  ['Home', '#home'],
  ['About', '#about'],
  ['Services', '#services'],
  ['Work', '#work'],
  ['Why', '#why'],
  ['Process', '#process'],
  ['Stack', '#stack'],
  ['Contact', '#contact'],
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setIsOpen(false)
    }
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  const closeMenu = () => setIsOpen(false)

  return <header className="site-header">
    <nav className="site-nav container" aria-label="Primary navigation">
      <a className="wordmark" href="#home" onClick={closeMenu}>Shahadat<span aria-hidden="true">.</span></a>
      <button className="menu-toggle" type="button" aria-controls="site-menu" aria-expanded={isOpen} onClick={() => setIsOpen((open) => !open)}>
        <span className="sr-only">{isOpen ? 'Close navigation menu' : 'Open navigation menu'}</span>
        <span aria-hidden="true">{isOpen ? 'Close' : 'Menu'}</span>
      </button>
      <div className={`nav-menu ${isOpen ? 'is-open' : ''}`} id="site-menu">
        <button className="menu-close" type="button" onClick={closeMenu} aria-label="Close navigation menu">×</button>
        <div className="nav-links">
          {links.map(([label, href]) => <a key={label} href={href} onClick={closeMenu}>{label}</a>)}
        </div>
        <a className="nav-cta" href="#contact" onClick={closeMenu}>Let&apos;s Talk <span aria-hidden="true">↗</span></a>
      </div>
    </nav>
  </header>
}
