import { useState } from 'react'
import { Header } from './components/Header.jsx'
import { Hero } from './components/Hero.jsx'
import { TechStack } from './components/TechStack.jsx'
import { Projects } from './components/Projects.jsx'
import { Contact } from './components/Contact.jsx'
import { SiteFooter } from './components/Footer.jsx'

export default function App(){
  const [theme, setTheme] = useState('dark')
  const toggle = () => setTheme(t => t === 'light' ? 'dark' : 'light')

  return (
    <div data-theme={theme}>
      <Header theme={theme} onToggleTheme={toggle} />
      <main>
        <Hero />
        <TechStack />
        <Projects />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  )
}
