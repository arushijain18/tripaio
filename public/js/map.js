console.log("MAP LOADED");

document.addEventListener("DOMContentLoaded", () => {
  const coords = window.mapCoordinates;

  const map = L.map("map").setView([coords[1], coords[0]], 12);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap",
  }).addTo(map);

  L.marker([coords[1], coords[0]])
    .addTo(map)
    .bindPopup(window.listingTitle)
    .openPopup();

  map.invalidateSize();
});