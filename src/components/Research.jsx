// src/components/Research.jsx

function Paper({ title, summary, venue, year, status, tags = [], links = {} }) {
  return (
    <article className="paper-card flex flex-col">
      {status && (
        <div className="self-end -mt-1 mb-1 text-[11px] px-2 py-0.5 rounded-full bg-brand-500 text-white">
          {status}
        </div>
      )}

      <h3 className="font-serif text-xl font-semibold tracking-tight">{title}</h3>

      {(venue || year) && (
        <div className="mt-1 text-xs text-zinc-500">
          {venue}{venue && year ? ' • ' : ''}{year}
        </div>
      )}

      <p className="mt-3 text-sm text-zinc-700 dark:text-zinc-200">
        {summary}
      </p>

      {tags.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-2">
          {tags.map(t => <span key={t} className="badge">{t}</span>)}
        </div>
      )}

      {Object.keys(links).length > 0 && (
        <div className="mt-4 text-sm flex flex-wrap gap-x-4 gap-y-2">
          {links.pdf && <a href={links.pdf} target="_blank" rel="noreferrer" className="underline hover:text-brand-600">PDF</a>}
          {links.overview && <a href={links.overview} target="_blank" rel="noreferrer" className="underline hover:text-brand-600">Overview</a>}
          {links.code && <a href={links.code} target="_blank" rel="noreferrer" className="underline hover:text-brand-600">Code</a>}
          {links.slides && <a href={links.slides} target="_blank" rel="noreferrer" className="underline hover:text-brand-600">Slides</a>}
          {links.notebook && <a href={links.notebook} target="_blank" rel="noreferrer" className="underline hover:text-brand-600">Notebook</a>}
        </div>
      )}
    </article>
  );
}

const GRID_CLASSES =
  // start items at top; let tracks stretch; control width with wrapper
  "mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-start justify-items-stretch";

const CARD_WRAPPER =
  // prevent overflow on phones; center within track
  "w-full  max-w-none mx-auto";

const PAPERS = [
  {
    title: 'HawkSight-LLM: Structured Preference Extraction for College Recommendation',
    summary:
      'Evaluates whether large language models can reliably convert free-text student descriptions into structured preference vectors for grounded college recommendation, using prompt-constrained JSON extraction and hallucination-controlled explanation.',
    venue: 'LLM Systems / Decision Support',
    year: '2025',
    status: 'Paper',
    tags: ['LLMs','Prompt Engineering','Decision Support','Structured Reasoning','Evaluation'],
    links: {
      pdf: '/Amisu_LLM_Paper.pdf',
      overview: 'https://ranking-with-purpose.streamlit.app/'
    }
  },
  {
    title: 'Enhancing LLM Reasoning with Dynamic Knowledge Graph Retrieval',
    summary:'Proposes and evaluates a dynamic, query-specific knowledge graph retrieval framework that grounds large language models in explicit, verifiable facts to improve reasoning accuracy, consistency, and interpretability across high-stakes domains.',
    venue: 'Capstone / Thesis',
    year: '2026',
    status: 'WIP',
    tags: ['GraphRAG','Knowledge Graphs','LLM Reasoning','Retrieval'],
    links: { pdf: '#', overview: '/GraphRAG.pdf', notebook: '#' }
  },
  {
    title: 'Comparative Analysis of Multi-Criteria Recommender Algorithms for College Selection',
    summary:
      'Evaluates ranking and recommendation algorithms for college selection under multi-criteria preferences, analyzing performance, overlap, and sensitivity across simulated student profiles to highlight tradeoffs in fairness, diversity, and stability.',
    venue: 'Recommender Systems',
    year: '2025',
    status: 'Paper',
    tags: ['Recommender Systems','Multi-Criteria Decision Making','Ranking Algorithms','Evaluation','Fairness'],
    links: {
      pdf: '/Amisu_rec_paper.pdf',
      overview: 'https://ranking-with-purpose.streamlit.app/',
      notebook: 'https://colab.research.google.com/drive/1v7JV_x1xaC5UjQi8ua9r3eLMag6evBy4?ths=true&usp=docs_home'
    }
  },
  {
    title: 'AI vs AI: Cross-Domain Robustness of RoBERTa-Based Human–AI Text Detection',
    summary:'Evaluates the cross-domain robustness of a RoBERTa-based AI text detector, demonstrating significant performance degradation and model-specific bias when applied from short Q&A data to long-form academic writing.',
    venue: 'Academic Research',
    year: '2025',
    status: 'Paper',
    tags: ['AI Detection','Cross-Domain','RoBERTa', 'Evaluation', 'Bias'],
    links: { pdf: '/AIvsAI.pdf', notebook: 'https://colab.research.google.com/drive/1dzU0E_kAFkTRAY9zFR1f-722HeGnZl_z' }
  },
  {
    title: 'Stylometric and Semantic Analysis of Musical Lyrics for Artist Attribution',
    summary:'Evaluates whether semantic embeddings and zero-shot emotion features improve artist attribution from lyrics, showing that hybrid semantic-emotional representations dramatically outperform lexical stylometry baselines.',
    venue: 'NLP / Representation Learning',
    year: '2025',
    status: 'WIP',
    tags: ['Music Information Retrieval','Representation Learning','Stylometry','Emotion Modeling','Transformer Embeddings'],
    links: { 
      pdf: '/Lyrical_Classification.pdf', 
      notebook: 'https://colab.research.google.com/drive/1seJo_Rmbdp6GQMEPaidbOqKv7T1fWNbP' }
  },
  {
    title: 'Evaluation of Classical and Ensemble ML Algorithms for Thyroid Cancer Diagnosis',
    summary: 'Compares classical and ensemble machine learning models for thyroid cancer risk prediction across two clinical datasets, demonstrating the superior performance and robustness of ensemble methods while highlighting tradeoffs with simpler, interpretable models',
    venue: 'Applied ML - Healthcare',
    year: '2025',
    status: 'Paper',
    tags: ['Healthcare ML','Ensemble Methods','Model Evaluation', 'Clinical Data'],
    links: { pdf: '/ThyroidCancerML.pdf'}
  },
];

export default function Research() {
  return (
    <section id="research" className="section py-16 md:py-24 overflow-x-hidden">
      <div className="eyebrow">RESEARCH</div>
      <h2 className="h2 mt-1">Papers & Studies</h2>
      <p className="mt-2 text-zinc-600 dark:text-zinc-300 max-w-prose">
        Short abstracts with links to PDFs and notes.
      </p>

      <div className={GRID_CLASSES}>
        {PAPERS.map(p => (
          <div key={p.title} className={CARD_WRAPPER}>
            <Paper {...p} />
          </div>
        ))}
      </div>
    </section>
  );
}
