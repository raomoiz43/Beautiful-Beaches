
let locate = document.querySelector('#map');
let geolocaation = navigator.geolocation;
if(geolocaation){
geolocaation.getCurrentPosition(function (position){
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    let map = L.map('map').setView([latitude, longitude], 13);
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);
        let marker = L.marker([latitude, longitude]).addTo(map);
        let circle = L.circle([latitude, longitude], {
            color: 'red',
            fillColor: 'rgba(0, 153, 255, 1)',
            fillOpacity: 0.5,
            radius: 100
        }).addTo(map);
})
}