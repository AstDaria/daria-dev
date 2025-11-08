import "./Footer.scss";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      © {year} Daria • Built with React & Vite • Deployed to Vercel
    </footer>
  );
}
