import "./Header.css";

export default function Header() {
  return (
    <header className="header_content">
      <nav>
        <div className="logo">
          <a href="#">SeeFLIX</a>
        </div>
        <div className="nav_links">
          <a href="./Home.jsx">Home</a>
          <a href="./Media.jsx">Media</a>
          <a href="./About.jsx">About</a>
          <a href="./Contact.jsx">Contact</a>
        </div>
      </nav>
    </header>
  );
}
