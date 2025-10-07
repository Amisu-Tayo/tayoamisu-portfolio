import { motion, useReducedMotion } from 'framer-motion'
import headshot from '../assets/headshot.jpg' // <-- add your image here

export default function Hero() {
  return (
    <section id="about" className="relative section pt-28 pb-28 md:pt-36 md:pb-40">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-4xl md:text-5xl font-extrabold tracking-tight font-serif"
          >
            I’m Tayo Amisu.
          </motion.h1>

          <p className="mt-3 text-zinc-600 dark:text-zinc-300 max-w-prose">
            I explore how data and intelligent systems can work together to solve meaningful problems.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#projects" className="btn btn-primary">View Projects</a>
            <a href="/TayoAmisuResume.pdf" className="btn btn-outline" target="_blank" rel="noopener noreferrer">Résumé</a>
            <a href="#contact" className="btn btn-ghost">Let’s Connect</a>
          </div>

          {/* Skills Marquee (chips) */}
          <div className="mt-6 overflow-hidden">
            <SkillsMarquee />
          </div>
        </div>

        {/* Right-hand card: photo + 'Current Focus' */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="card p-4 md:p-6"
          aria-label="Current focus and goals"
        >
          <div className="rounded-xl bg-gradient-to-br from-brand-100 to-white dark:from-zinc-800 dark:to-zinc-900 p-5">
            <div className="flex items-center gap-4">
              <img
                src={headshot}
                alt="Portrait of Tayo Amisu"
                className="h-16 w-16 rounded-2xl object-cover border border-white/60 dark:border-zinc-700 shadow-sm"
              />
              <div>
                <div className="eyebrow">CURRENT FOCUS</div>
                <div className="text-sm text-zinc-600 dark:text-zinc-300">
                  What I’m working towards:
                </div>
              </div>
            </div>

            <ul className="mt-4 space-y-2 text-sm text-zinc-700 dark:text-zinc-200">
              <li>• ML / AI roles that blend engineering and data science.</li>
              <li>• Research collaborations in applied AI and LLMs.</li>
              <li>• Exploring PhD directions in intelligent systems.</li>
            </ul>
          </div>
        </motion.div>
      </div>

      {/* Optional: gentle fade to separate from next section */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-b from-transparent to-white dark:to-zinc-900 pointer-events-none" />
    </section>
  )
}

/* ---------------- Marquee component (chips) ---------------- */
const SKILLS = [
  'Python','Pandas','NumPy','SQL','Flask','FastAPI','scikit-learn','PyTorch',
  'LLMs','NLP','Evaluation','Recommenders','Data Viz','ETL','Docker',
  'AWS','S3','RDS','CloudFront','Git','Testing','Dashboards','Experimentation'
]

function ChipsRow({ prefix = '' }) {
  return (
    <>
      {SKILLS.map(t => (
        <span key={`${prefix}-${t}`} className="chip">{t}</span>
      ))}
    </>
  )
}

function SkillsMarquee() {
  const reduce = useReducedMotion()

  const animation = reduce
    ? {}
    : {
        x: ['0%', '-50%'],
        transition: { duration: 22, ease: 'linear', repeat: Infinity }
      }

  return (
    <div className="relative overflow-hidden">
      {/* soft fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-white dark:from-zinc-900 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-white dark:from-zinc-900 to-transparent" />

      <motion.div
        className="flex gap-2 whitespace-nowrap"
        animate={animation}
        onMouseEnter={e => e.currentTarget.getAnimations?.().forEach(a => a.pause())}
        onMouseLeave={e => e.currentTarget.getAnimations?.().forEach(a => a.play())}
      >
        <ChipsRow prefix="a" />
        <ChipsRow prefix="b" />
      </motion.div>
    </div>
  )
}
