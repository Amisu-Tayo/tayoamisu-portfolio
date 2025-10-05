export default function CredStrip() {
  return (
    <section className="section py-10">
      <div className="grid gap-4 md:grid-cols-3 items-stretch">
        <div className="card p-5">
          <div className="eyebrow">Recognition</div>
          <div className="mt-1 font-semibold">SWE WE25 Collegiate Research Competition — Rapid-Fire Finalist</div>
          <div className="text-zinc-600 dark:text-zinc-300 text-sm">New Orleans • Oct 2025</div>
          <div className="mt-3">
          <div className="font-semibold">Towson University Data Analytics Competition — Finalist</div>
          <div className="text-zinc-600 dark:text-zinc-300 text-sm">Towson MD • Apr 2025</div>
        </div>
        </div>
        <div className="card p-5 flex flex-col justify-between">
          <div>
            <div className="eyebrow">Education</div>
            <div className="mt-1 font-semibold">M.S. Computer Science (Data Science)</div>
            <div className="text-zinc-600 dark:text-zinc-300 text-sm">
              Towson University • Expected May 2026
            </div>
            <div className="text-zinc-600 dark:text-zinc-300 text-sm mt-1">
              Coursework: Data Mining, Artificial Intelligence, Big Data Analytics, Design of Algorithms
            </div>
          </div>
          <div className="mt-3 text-zinc-500 dark:text-zinc-400 text-xs">
            B.S. Computer Science • Alcorn State University, 2021
          </div>
        </div>
        <div className="card p-5">
          <div className="eyebrow">Interests</div>
          <div className="mt-1 font-semibold">XAI • AR/VR/XR • Research • Education</div>
          <div className="text-zinc-600 dark:text-zinc-300 text-sm">Cloud • Data • Community</div>
        </div>
      </div>
    </section>
  )
}
