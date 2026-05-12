export default function Portfolio() {
  return (
    <section className="section" id="work">
      <h2>Portfolio</h2>

      <div style={{
        display:"grid",
        gridTemplateColumns:"repeat(auto-fit,minmax(250px,1fr))",
        gap:"18px",
        marginTop:"40px"
      }}>
        <img src="/images/custom-furniture.png" style={{width:"100%",borderRadius:"8px"}} />
        <img src="/images/upholstery-work.png" style={{width:"100%",borderRadius:"8px"}} />
        <img src="/images/restoration-chair.png" style={{width:"100%",borderRadius:"8px"}} />
        <img src="/images/paint-finishing.png" style={{width:"100%",borderRadius:"8px"}} />
      </div>
    </section>
  );
}