import { useState } from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import TechStack from "./components/TechStack/TechStack";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import SiteFooter from "./components/Footer/Footer";

export default function App() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const toggle = () => setTheme((t) => (t === "light" ? "dark" : "light"));
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
  );
}
