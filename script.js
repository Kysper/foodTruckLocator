const truckList = document.getElementById('truck-list');

// Function to update the truck list
function updateTruckList() {
    truckList.innerHTML = ''; // Clear the list


    // Iterate through trucks and create list items
    trucks.forEach(truck => {
        const listItem = document.createElement('li');
        listItem.textContent = `${truck.name} - ${truck.type} - ${truckCoordinates}`;
        truckList.appendChild(listItem);
    });
}