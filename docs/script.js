async function fetchMileage() {
    const response = await fetch('mileage.json');
    const data = await response.json();
    const vehiclesContainer = document.getElementById('vehicles');

    vehiclesContainer.innerHTML = ''; // Clear previous content

    data.vehicles.forEach((vehicle, index) => {
        const vehicleElement = document.createElement('div');
        vehicleElement.innerHTML = `
            <h2>Vehicle ${index + 1}</h2>
            <p>Current Mileage: ${vehicle.mileage}</p>
            <p>Remaining RUC: ${vehicle.remaining_ruc} km</p>
        `;
        vehiclesContainer.appendChild(vehicleElement);
    });
}

fetchMileage();
