async function fetchMileage() {
    const response = await fetch('mileage.json');
    const data = await response.json();
    document.getElementById('mileage').innerText = data.mileage;
    document.getElementById('ruc').innerText = data.remaining_ruc;
}

fetchMileage();
