let map;
let marker;
let position = { lat: 40.7128, lng: -74.0060 };
async function initMap() {

    const { Map } = await google.maps.importLibrary("maps");

    map = new Map(document.getElementById('map'), {
        center: position, // Default center (New York)
        zoom: 10,
        mapId: "ftloc24"
    })
}




async function addTruckMarker(truckName, truckType, latitude, longitude) {
    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
    map.setCenter(new google.maps.LatLng(latitude, longitude))
    map.setZoom(7)
    marker = new AdvancedMarkerElement({
        map: map,
        position: { lat: latitude, lng: longitude },
        title: truckName,
    })

    const html = `
    <div>
    <h4>${truckName}</h4>
    <p>${truckType}</p>
    <p>Enjoy a delicious ${truckType} at our food truck</p>
    </div>`;

    const infowindow = new google.maps.InfoWindow({
        content: html,
        ariaLabel: truckName,
    });

    marker.addListener("click", () => {
        infowindow.open({
            anchor: marker,
            map,
        });
    })

}




initMap();