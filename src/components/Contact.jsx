import { motion } from 'framer-motion'
import { Mail, Copy, Check, Github, Linkedin, PenSquare, Instagram } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const email = 'tayoamisu68@gmail.com' // <-- replace this
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch {}
  }

  const mailto = `mailto:${email}?subject=Hello%20Tayo%20—%20Portfolio%20Inquiry`

  return (
    <section id="contact" className="section py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.35 }}
        className="card p-6 md:p-10"
      >
        <div className="eyebrow">LET’S CONNECT</div>
        <h2 className="h2 mt-1">Want to talk?</h2>
        <p className="mt-2 text-zinc-600 dark:text-zinc-300 max-w-prose">
          I’m open to ML/AI roles, research collaborations, and thoughtful projects.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <a href={mailto} className="btn btn-primary">
            <Mail className="h-4 w-4" />
            Email me
          </a>

          <button onClick={copy} className="btn btn-ghost" aria-label="Copy email">
            {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
            {copied ? 'Copied' : 'Copy email'}
          </button>

          <a href="https://github.com/Amisu-Tayo" target="_blank" rel="noreferrer" className="btn btn-outline">
            <Github className="h-4 w-4" />
            GitHub
          </a>

          <a href="https://www.linkedin.com/in/haleemah-amisu" target="_blank" rel="noreferrer" className="btn btn-outline">
            <Linkedin className="h-4 w-4" />
            LinkedIn
          </a>

          <a href="https://medium.com/@tayoamisu" target="_blank" rel="noreferrer" className="btn btn-outline">
            <PenSquare className="h-4 w-4" />
            Medium
          </a>

          <a href="https://instagram.com/techy.tayo" target="_blank" rel="noreferrer" className="btn btn-outline">
            <Instagram className="h-4 w-4" />
            Instagram
          </a>
        </div>

        <p className="mt-4 text-sm text-zinc-500 dark:text-zinc-400">
          Prefer a brief overview first? See my <a className="underline hover:text-brand-600" href="/TayoAmisuResume.pdf" target="_blank" rel="noreferrer">résumé</a>.
        </p>
      </motion.div>
    </section>
  )
}
