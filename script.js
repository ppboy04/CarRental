document.addEventListener("DOMContentLoaded", () => {
    const bookingForm = document.getElementById("booking-form");
    const carList = document.getElementById("car-list");

    const cars = {
        Jaipur: [
            { name: "Maruti Swift", img: "D:/pbl/swift.jpeg", price: "₹1500/day", available: true },
            { name: "Toyota Innova", img: "D:/pbl/innova.jpeg", price: "₹2800/day", available: false }
        ],
        Udaipur: [
            { name: "Mahindra Thar", img: "D:/pbl/thar.jpeg", price: "₹3200/day", available: true },
            { name: "Hyundai Venue", img: "D:/pbl/venue.jpeg", price: "₹2000/day", available: true }
        ],
        Ajmer: [
            { name: "Hyundai Creta", img: "D:/pbl/creta.jpeg", price: "₹2200/day", available: false },
            { name: "Honda City", img: "D:/pbl/honda city.jpeg", price: "₹2500/day", available: true }
        ],
        Jodhpur: [
            { name: "Kia Seltos", img: "D:/pbl/kia seltos.jpeg", price: "₹2400/day", available: true },
            { name: "Skoda Slavia", img: "D:/pbl/slavia.jpeg", price: "₹2300/day", available: false }
        ],
        Kota: [
            { name: "Tata Nexon", img: "D:/pbl/nexon.jpeg", price: "₹2100/day", available: true }
        ]
    };

    bookingForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const destination = document.getElementById("destination").value;
        
        carList.innerHTML = ""; 
        if (destination && cars[destination]) {
            cars[destination].forEach(car => {
                carList.innerHTML += `
                    <div class="car">
                        <img src="${car.img}" alt="${car.name}">
                        <h3>${car.name}</h3>
                        <p><strong>Price:</strong> ${car.price}</p>
                        <p><strong>Status:</strong> ${car.available ? "Available ✅" : "Not Available ❌"}</p>
                        ${car.available ? '<a href="#" class="btn">Book Now</a>' : ''}
                    </div>
                `;
            });
        }
    });
});
