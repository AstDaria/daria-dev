export function Header({ theme, onToggleTheme }){
  return (
    <header>
      <div className="container header-row">
        <div className="logo">Daria • Frontend</div>
        <div style={{display:'flex', gap:10, alignItems:'center'}}>
          <span className="badge">React • Vite • Vercel</span>
          <button className="btn ghost" onClick={onToggleTheme}>
            {theme === 'light' ? 'Dark' : 'Light'} mode
          </button>
        </div>
      </div>
    </header>
  )
}
