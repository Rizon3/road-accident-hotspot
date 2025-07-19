// Initialize Leaflet map
const map = L.map('map').setView([26.4525, 87.2718], 13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Example hotspots
const hotspots = [
  { lat: 26.457, lng: 87.276, label: 'High Accident Zone 1' },
  { lat: 26.460, lng: 87.268, label: 'High Accident Zone 2' }
];

hotspots.forEach(h => {
  L.marker([h.lat, h.lng]).addTo(map).bindPopup(h.label);
});

// Handle prediction form
document.getElementById('predictForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const location = document.getElementById('locationInput').value;
  document.getElementById('predictionResult').innerText = `Predicted risk for "${location}" is: Medium`;
});

// Chart.js graph
const ctx = document.getElementById('accidentChart').getContext('2d');
new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr'],
    datasets: [{
      label: 'Accidents',
      data: [12, 19, 3, 5],
      backgroundColor: 'rgba(255, 99, 132, 0.5)'
    }]
  }
});

// CSV Upload (basic preview)
document.getElementById('csvUpload').addEventListener('change', function () {
  alert('CSV uploaded! (Parsing functionality can be added later)');
});

