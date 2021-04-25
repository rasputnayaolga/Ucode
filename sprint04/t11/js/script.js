mapboxgl.accessToken = 'pk.eyJ1Ijoib3JvenB1dG5hIiwiYSI6ImNrbWNlMmdwOTJhc3QycW42bGNtMDJsc24ifQ.uNfvN8DzAOeh_z48My-ocA';
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/dark-v10',
    center: [165.973, -50.604167],
    zoom: 13,
});
const coordinates = document.getElementById('coordinates');

map.addControl(
    new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl
    })
);

const geolocate = new mapboxgl.GeolocateControl({
    positionOptions: {
        enableHighAccuracy: true
    },
    trackUserLocation: true
});
map.addControl(geolocate);

geolocate.on('trackuserlocationstart', function () {
    marker.remove();
})

const nav = new mapboxgl.NavigationControl();
map.addControl(nav, 'top-right');

const marker = new mapboxgl.Marker({
    draggable: true
}).setLngLat([165.973, -50.604167]).addTo(map);

function onDragEnd() {
    const lngLat = marker.getLngLat();
    coordinates.style.display = 'block';
    coordinates.innerHTML = 'Longitude: ' + lngLat.lng + '<br />Latitude: ' + lngLat.lat;
}

marker.on('dragend', onDragEnd);
