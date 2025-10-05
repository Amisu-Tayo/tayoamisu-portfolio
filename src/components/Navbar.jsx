import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import ThemeToggle from './ThemeToggle'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close the mobile menu on hash change (navigating to #section) or when resizing to desktop
  useEffect(() => {
    const close = () => setOpen(false)
    const onResize = () => { if (window.innerWidth >= 768) setOpen(false) }
    window.addEventListener('hashchange', close)
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('hashchange', close)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 backdrop-blur ${
        scrolled ? 'bg-white/70 dark:bg-zinc-900/70 border-b border-zinc-200 dark:border-zinc-800' : ''
      }`}
    >
      <nav className="section py-3 relative">
        <div className="flex items-center justify-between">
          <a href="/" className="font-semibold tracking-tight">Tayo Amisu</a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-4 text-sm">
            <a href="#about" className="hover:text-brand-600">About</a>
            <a href="#projects" className="hover:text-brand-600">Projects</a>
            <a href="#research" className="hover:text-brand-600">Research</a>
            <a href="#contact" className="hover:text-brand-600">Contact</a>
            <a href="/resume.pdf" className="btn btn-outline">Résumé</a>
            <ThemeToggle />
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden btn btn-ghost"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen(o => !o)}
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile menu (rendered only when open) */}
        {open && (
          <div
            id="mobile-menu"
            className="md:hidden absolute left-0 right-0 top-full z-50 border-t border-zinc-200 dark:border-zinc-800 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-sm"
          >
            <div className="section py-3">
              <div className="flex flex-col gap-1 text-sm">
                <a href="#about" className="py-2 hover:text-brand-600" onClick={() => setOpen(false)}>About</a>
                <a href="#projects" className="py-2 hover:text-brand-600" onClick={() => setOpen(false)}>Projects</a>
                <a href="#research" className="py-2 hover:text-brand-600" onClick={() => setOpen(false)}>Research</a>
                <a href="#contact" className="py-2 hover:text-brand-600" onClick={() => setOpen(false)}>Contact</a>
                <a href="/TayoAmisuResume.pdf" className="btn btn-outline mt-2" onClick={() => setOpen(false)}>Résumé</a>
                <div className="mt-2"><ThemeToggle /></div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
