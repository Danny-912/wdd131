// Product Array
const products = [
    { id: "p1", name: "Wireless Headphones" },
    { id: "p2", name: "Smart Watch" },
    { id: "p3", name: "Bluetooth Speaker" },
    { id: "p4", name: "Laptop Stand" }
];

// Populate select options
const productSelect = document.getElementById("productName");
products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.id;
    option.textContent = product.name;
    productSelect.appendChild(option);
});

// Handle review counter in localStorage
const reviewCounterElement = document.getElementById("reviewCounter");
let reviewCount = localStorage.getItem("reviewCount") || 0;

// If page is loaded after submission, increment counter
if (window.location.href.includes("review.html") && document.referrer.includes("review.html") === false) {
    reviewCount++;
    localStorage.setItem("reviewCount", reviewCount);
}

reviewCounterElement.textContent = You have submitted ${reviewCount} reviews so far.;