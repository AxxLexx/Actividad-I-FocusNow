import { useEffect, useState } from "react";

function Tips() {
  const [profile, setProfile] = useState("student");
  const [tips, setTips] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/api/tips/${profile}`)
      .then(res => res.json())
      .then(data => setTips(data.tips))
      .catch(error => console.error("Error:", error));
  }, [profile]);

  return (
    <section className="tips-section">
      <h2>Consejos de Productividad</h2>

      <div style={{ marginBottom: "30px" }}>
        <button onClick={() => setProfile("student")}>Estudiante</button>
        <button onClick={() => setProfile("professional")} style={{ marginLeft: "10px" }}>
          Profesional
        </button>
        <button onClick={() => setProfile("entrepreneur")} style={{ marginLeft: "10px" }}>
          Emprendedor
        </button>
      </div>

      <div className="tips-container">
        {tips.map((tip, index) => (
          <div className="tip-card" key={index}>
            <p>{tip}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Tips;