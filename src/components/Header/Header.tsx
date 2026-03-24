import { useState } from "react";
import "./Header.scss";

export default function Header() {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <header className="header">
      <div className="header__inner">
        <a className="header__logo" href="#">
          Daria Astafeva
        </a>

        <nav className="header__nav header__nav--desktop">
          <a className="header__link" href="#skills">Skills</a>
          <a className="header__link" href="#impact">Impact</a>
          <a className="header__link" href="#stack">Expertise</a>
          <a className="header__link" href="#projects">Projects</a>
          <a className="header__link" href="#contact">Contact</a>
        </nav>

        <button
          className={`header__burger${open ? " header__burger--open" : ""}`}
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <span className="header__burger-line" />
          <span className="header__burger-line" />
          <span className="header__burger-line" />
        </button>
      </div>

      <div
        className={`header__mobile-menu${open ? " header__mobile-menu--open" : ""}`}
      >
        <a className="header__mobile-link" href="#skills" onClick={close}>Skills</a>
        <a className="header__mobile-link" href="#impact" onClick={close}>Impact</a>
        <a className="header__mobile-link" href="#stack" onClick={close}>Expertise</a>
        <a className="header__mobile-link" href="#projects" onClick={close}>Projects</a>
        <a className="header__mobile-link" href="#contact" onClick={close}>Contact</a>
      </div>
    </header>
  );
}
