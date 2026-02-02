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
    title: 'Enhancing LLM Reasoning with Dynamic Knowledge Graph Retrieval',
    summary:
      'Proposes a dynamic graph-structured retrieval framework that grounds large language models in adaptive, verifiable knowledge graphs, improving reasoning reliability and interpretability.',
    venue: 'Capstone / Thesis',
    year: '2026',
    status: 'WIP',
    tags: ['GraphRAG','Knowledge Graphs','LLM Reasoning','Retrieval'],
    links: { pdf: '/GraphRAG.pdf', overview: '#', notebook: '#' }
  },
  {
    title: 'Evaluating the Reliability of Transformer Models for Human–AI Text Classification',
    summary:
      'Examining transformer-based classifiers and detection models for human vs. AI text, with emphasis on explainability, reliability, and bias.',
    venue: 'Natural Language Processing',
    year: '2025',
    status: 'WIP',
    tags: ['Transformers','Detection','Explainability','Evaluation', 'Bias'],
    links: { pdf: '/AI-vs-AI.pdf', overview: '#', notebook: '#' }
  },
  {
    title: 'Comparative Analysis of ML Techniques for Graph-Based Classification',
    summary:
      'Investigates how graph topology and engineered node features impact learning outcomes across classical ML models, highlighting tradeoffs between accuracy and interpretability.',
    venue: 'Data Mining',
    year: '2025',
    status: 'Paper',
    tags: ['Graph ML','Explainability','Network Analysis'],
    links: { pdf: '#', overview: '#', notebook: 'https://colab.research.google.com/drive/1mC8IjbfGm-5XTez96WHH37R367Or9qmx' }
  },
  {
    title: 'Multi-Modal Stylometric Analysis of Musical Lyrics',
    summary:
      'Can we infer musical emotion, genre, and authorship from lyrics alone using transformer embeddings and stylometry?',
    venue: 'NLP / Representation Learning',
    year: '2025',
    status: 'WIP',
    tags: ['Transformer Embeddings','Stylometry','Emotion Classification', 'Multilabel'],
    links: { 
      pdf: '/Lyrical_Classification.pdf', 
      overview: '#', 
      notebook: 'https://colab.research.google.com/drive/1seJo_Rmbdp6GQMEPaidbOqKv7T1fWNbP?usp=sharing' }
  },
  {
    title: 'Evaluation of Classical and Ensemble ML Algorithms for Thyroid Cancer Diagnosis',
    summary:
      'Benchmarks decision trees, random forests, and boosting models on medical diagnostic data, emphasizing interpretability and precision.',
    venue: 'Applied ML - Healthcare',
    year: '2025',
    status: 'Paper',
    tags: ['Healthcare ML','Interpretability','Ensembles','Model Evaluation'],
    links: { pdf: '/ThyroidCancerML.pdf', overview: '#', notebook: '#' }
  },
  {
    title: 'Analysis of Towson University\'s Performance & Rankings',
    summary:
      'A pipeline-driven analysis of Towson’s performance metrics, integrating ETL, feature engineering, and visualization.',
    venue: 'Data Analytics Competition',
    year: '2025',
    status: 'Finalist',
    tags: ['Data Engineering','Analytics','Dashboards','ETL', 'Feature Engineering'],
    links: { pdf: '/TuAnalyticsSummary.pdf', overview: '/TuAnalyticsViz.pdf', notebook: 'https://colab.research.google.com/drive/1NyYftylwOWXO_IAbDkflImh2c8cw3JIC?ths=true&usp=docs_home#scrollTo=NK3Obws66L1N' }
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
