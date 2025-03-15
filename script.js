function listRides() {
    // Array of sample rides
    const rides = [
        { name: 'John Doe', phone: '123-456-7890', car: 'Toyota Corolla' },
        { name: 'Jane Smith', phone: '987-654-3210', car: 'Honda Civic' },
        { name: 'Mike Johnson', phone: '555-555-5555', car: 'Ford Focus' },
        { name: 'Sarah Lee', phone: '222-222-2222', car: 'Chevrolet Malibu' },
        { name: 'Chris Brown', phone: '333-333-3333', car: 'Nissan Altima' }
    ];

    // Randomize number of rides for the location
    const randomRides = rides.sort(() => 0.5 - Math.random()).slice(0, Math.floor(Math.random() * 5) + 1);

    // Display rides in the "availableRides" section
    const rideList = document.getElementById('availableRides');
    rideList.innerHTML = '<h3>Available Rides:</h3>';
    randomRides.forEach(ride => {
        const rideElement = document.createElement('div');
        rideElement.classList.add('ride');
        rideElement.innerHTML = `
            <p><strong>Name:</strong> ${ride.name}</p>
            <p><strong>Phone:</strong> ${ride.phone}</p>
            <p><strong>Car:</strong> ${ride.car}</p>
        `;
        rideList.appendChild(rideElement);
    });
}