import "./Header.scss";

type Props = {
  theme: "light" | "dark";
  onToggleTheme: () => void;
};

export default function Header({ theme, onToggleTheme }: Props) {
  return (
    <header className="header">
      <div className="header__row">
        <div className="header__logo">Daria • Frontend</div>
        <div className="header__controls">
          <span className="header__badge">React • Vite • Vercel</span>
          <button
            className="header__button header__button--ghost"
            onClick={onToggleTheme}
          >
            {theme === "light" ? "Dark" : "Light"} mode
          </button>
        </div>
      </div>
    </header>
  );
}
