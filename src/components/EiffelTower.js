import React from "react";

export default function EiffelTower() {
  return (
    <section className="eiffel-section">
      <img className="bg-img" src="images/eiffel-tower.jpg" alt="paris town" />
      <div className="title-container">
        <div className="title">
          <span className="line"></span>
          <h1>Eiffel Tower</h1>
        </div>
        <button className="btn">Check Tours</button>
      </div>
      <p>Witness the most marvelous structure of Paris - The Eiffel Tower</p>
    </section>
  );
}
