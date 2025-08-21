import { useEffect, useState } from "react";
import MeasurementCard from "../components/MeasurementCard";

const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

export default function Home() {
  const [measurements, setMeasurements] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    fetch(`${backendUrl}/api/data`)
      .then(res => res.json())
      .then(data => setMeasurements(data));
  }, []);

  return (
    <div className={darkMode ? "dark-mode" : ""}>
      <div className="container">
        <h1>Mini Stacja Pogodowa</h1>
        <button onClick={() => setDarkMode(!darkMode)}>
          Tryb {darkMode ? "jasny" : "ciemny"}
        </button>

        {measurements.length === 0 && <p>Ładowanie danych...</p>}
        {measurements.map(m => (
          <MeasurementCard key={m.id} measurement={m} />
        ))}
      </div>
    </div>
  );
}
