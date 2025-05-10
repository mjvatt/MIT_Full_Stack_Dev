function createMapMarker() {

  mapboxgl.accessToken = "{redacted}";

  let map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11",
    center: [-71.091542, 42.358862],
    zoom: 12,
  });
  
  const marker = new mapboxgl.Marker()
    .setLngLat([-71.091542, 42.358862])
    .addTo(map)
  
}

createMapMarker();
