export default function ProjectCard({ title, blurb, tags = [], links = {}, img }) {
  return (
    <article className="card p-5 md:p-6">
      {/* === Project Thumbnail Section === */}
            <a
        href={links.live || links.demo || links.repo || '#'}
        target="_blank"
        rel="noreferrer"
        className="block aspect-[16/10] w-full rounded-xl overflow-hidden bg-zinc-100 dark:bg-zinc-800 hover:opacity-90 transition"
      >
        {img && (
          <a href={links?.live || links?.demo || links?.repo || '#'} target="_blank" rel="noreferrer">
          <img
            src={img}
            alt={`${title} preview`}
            className="w-full h-full object-center"
          />
        ) : (
          <div className="grid place-items-center text-zinc-500 dark:text-zinc-400 text-sm">
            Project thumbnail
          </div>
        )}
      </a>

      {/* === Title and Description === */}
      <h3 className="mt-4 text-lg font-semibold">{title}</h3>
      <p className="mt-1 text-zinc-600 dark:text-zinc-300">{blurb}</p>

      {/* === Tags (skills/tech stack) === */}
      <div className="mt-3 flex flex-wrap gap-2">
        {tags.map(t => (
          <span key={t} className="chip">{t}</span>
        ))}
      </div>

      {/* === Links (live / demo / repo / case study) === */}
      <div className="mt-4 flex flex-wrap gap-3">
        {Object.entries(links).map(([k, v]) => (
          <a
            key={k}
            href={v}
            className="btn btn-ghost capitalize"
            target="_blank"
            rel="noreferrer"
          >
            {k}
          </a>
        ))}
      </div>
    </article>
  )
}
