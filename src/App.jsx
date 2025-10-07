import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FeaturedProjects from './components/FeaturedProjects'
import CredStrip from './components/CredStrip'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Research from './components/Research'


export default function App() {
  return (
    <div className="min-h-screen flex flex-col text-zinc-900 dark:text-zinc-50">
      <Navbar />
      <main className="flex-1 overflow-x-hidden">
        <Hero />
        <FeaturedProjects />
        <Research />
        <CredStrip />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
