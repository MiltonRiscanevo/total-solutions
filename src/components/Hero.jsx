import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="overlay">
        <div className="hero-content">
          <p>Canadian Quality • Colombian Artistry</p>

          <h1>
            Fine Upholstery.
            <br />
            Crafted With Passion.
          </h1>

          <p className="hero-text">
            Custom furniture, upholstery restoration and premium finishes.
          </p>

          <div className="buttons">
            <a href="#services" className="btn-primary">
              Our Services
            </a>

            <a href="#work" className="btn-outline">
              View Portfolio
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}