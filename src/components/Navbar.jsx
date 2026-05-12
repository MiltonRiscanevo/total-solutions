import "./Navbar.css";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="logo">🍁 TOTAL SOLUTIONS</div>

      <nav>
        <a href="#home">Home</a>
        <a href="#services">Services</a>
        <a href="#about">About</a>
        <a href="#work">Portfolio</a>
        <a href="#contact">Contact</a>
      </nav>

      <a href="#contact" className="quote-btn">
        Get Quote
      </a>
    </header>
  );
}