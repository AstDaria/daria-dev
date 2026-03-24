import "./Footer.scss";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">© {year} Daria — designed & built by me</footer>
  );
}
