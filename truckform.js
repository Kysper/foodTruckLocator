const truckForm = document.getElementById('truck-form');
const truckList = document.getElementById("truck-list");
let message = document.getElementById("message");
let truckAddress;
truckForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent page reload

    // Get form data
    const truckName = document.getElementById('truck-name').value;
    const truckType = document.getElementById('truck-type').value;
    
    const options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
    }

    navigator.geolocation.getCurrentPosition((position) => {
        addTruckMarker(truckName, truckType, position.coords.latitude, position.coords.longitude);
    }, error, options);
})

function error() {
    alert("Sorry, no position available.");
}
