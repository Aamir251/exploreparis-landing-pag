export default function Home({ state }) {
  return (
    <section className="home-section">
      <img className="bg-img" src="images/paris-town.jpg" alt="paris town" />
      <div className="title-container">
        <div className="title">
          <span className="line"></span>
          <h1>EXPLORE PARIS</h1>
        </div>
        <button className="btn">Check Tours</button>
      </div>
      <p>Visit the most lucrative places of paris at amazing prices</p>
    </section>
  );
}
