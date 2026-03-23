import "./Header.scss";

export default function Header() {
  return (
    <header className="header">
      <div className="header__inner">
        <div className="header__logo">Daria Astafeva</div>
        <nav className="header__nav">
          <a className="header__link" href="#contact">Contact</a>
          <a className="header__link" href="#projects">Projects</a>
          <a className="header__link header__link--hide-mobile" href="#achievements">Achievements</a>
        </nav>
      </div>
    </header>
  );
}
