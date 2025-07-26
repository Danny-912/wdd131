// === Footer Date Info ===
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;


// === Display Formatted Current Date ===
const now = new Date();
const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
document.getElementById("currentDate").textContent = now.toLocaleDateString(undefined, options);

// === Weather Data for Nigeria (Static) ===
const temperature = 20; // °C
const windSpeed = 5;    // km/h

document.getElementById("temperature").textContent = temperature;
document.getElementById("windSpeed").textContent = windSpeed;

// === Wind Chill Calculation (Metric) ===
function calculateWindChill(tempC, speedKmh) {
  return Math.round(13.12 + 0.6215 * tempC - 11.37 * Math.pow(speedKmh, 0.16) + 0.3965 * tempC * Math.pow(speedKmh, 0.16));
}

const windChillElement = document.getElementById("windChill");

// Wind chill rules: Temp ≤ 10°C and Wind > 4.8 km/h
if (temperature <= 10 && windSpeed > 4.8) {
  const windChill = calculateWindChill(temperature, windSpeed);
  windChillElement.textContent = ${windChill}°C;
} else {
  windChillElement.textContent = "N/A";
}