import { services } from "../data/services";

export default function Services() {
  return (
    <section className="section" id="services">
      <h2 style={{marginBottom:"40px"}}>Our Services</h2>

      <div style={{
        display:"grid",
        gridTemplateColumns:"repeat(auto-fit,minmax(250px,1fr))",
        gap:"24px"
      }}>
        {services.map((service) => (
          <div key={service.title} style={{
            background:"#fff",
            borderRadius:"10px",
            overflow:"hidden"
          }}>
            <img src={service.image} alt={service.title} style={{
              width:"100%",
              height:"260px",
              objectFit:"cover"
            }} />

            <div style={{padding:"24px"}}>
              <h3>{service.title}</h3>
              <p style={{marginTop:"10px"}}>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}