import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import TechStack from "./components/TechStack/TechStack";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import SiteFooter from "./components/Footer/Footer";
import Focus from "./components/Focus/Focus";
import Skills from "./components/Skills/Skills";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Skills />
        <Focus />
        <TechStack />
        <Projects />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
