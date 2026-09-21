import { useLenis } from './hooks/useLenis'
import { useScrollReveal } from './hooks/useScrollReveal'
import Hero from './components/Hero'
import About from './components/About'
import Cases from './components/Cases'
import Stats from './components/Stats'
import Statement from './components/Statement'
import Products from './components/Products'
import Testimonials from './components/Testimonials'
import Brands from './components/Brands'
import Footer from './components/Footer'
import SideTab from './components/SideTab'

function App() {
  useLenis()
  const scrollRef = useScrollReveal()

  return (
    <div ref={scrollRef} className="relative">
      <div className="grain" />
      <SideTab />
      <main>
        <Hero />
        <About />
        <Cases />
        <Stats />
        <Statement />
        <Products />
        <Testimonials />
        <Brands />
        <Footer />
      </main>
    </div>
  )
}

export default App
