export default function Heritage() {
  return (
    <section className="heritage-section section" id="about">
      <div>
        <h2>Where Canadian Quality Meets Colombian Artistry</h2>

        <p style={{marginTop:"20px",lineHeight:"1.8"}}>
          We combine Canadian precision with the warmth and colorful artisan
          heritage of Colombian upholstery tradition.
        </p>
      </div>

      <img
        src="/images/heritage-room.png"
        alt="heritage"
        style={{
          width:"100%",
          borderRadius:"10px"
        }}
      />
    </section>
  );
}