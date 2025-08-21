export function validateMeasurement(data) {
  const { temperature, humidity, pressure, device_id } = data;

  if (!device_id || typeof device_id !== "string") return false;
  if (typeof temperature !== "number") return false;
  if (typeof humidity !== "number") return false;
  if (pressure !== null && typeof pressure !== "number") return false;

  return true;
}
