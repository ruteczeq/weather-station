export default function MeasurementCard({ measurement }) {
  return (
    <div className="card">
      <p><strong>Urządzenie:</strong> {measurement.device_id}</p>
      <p><strong>Temperatura:</strong> {measurement.temperature}°C</p>
      <p><strong>Wilgotność:</strong> {measurement.humidity}%</p>
      <p><strong>Ciśnienie:</strong> {measurement.pressure ?? "brak"} hPa</p>
      <p><strong>Czas:</strong> {new Date(measurement.timestamp).toLocaleString()}</p>
    </div>
  );
}
