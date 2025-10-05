export default function Footer() {
  return (
    <footer className="mt-10 border-t border-zinc-200 dark:border-zinc-800">
      <div className="section py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-zinc-600 dark:text-zinc-300">© {new Date().getFullYear()} Tayo Amisu</div>
        <div className="flex gap-4 text-sm">
          <a href="#about" className="hover:text-brand-600">About</a>
          <a href="#projects" className="hover:text-brand-600">Projects</a>
          <a href="#research" className="hover:text-brand-600">Research</a>
          <a href="#contact" className="hover:text-brand-600">Contact</a>
        </div>
      </div>
    </footer>
  )
}
