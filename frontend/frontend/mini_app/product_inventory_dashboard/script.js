// ================== PRODUCT DATA ==================
// Load from localStorage or use default data

let products = JSON.parse(localStorage.getItem("products")) || [
{ id: 1, name: "Laptop", price: 55000, stock: 5, category: "electronics" },
{ id: 2, name: "Shirt", price: 1200, stock: 10, category: "clothing" },
{ id: 3, name: "Book", price: 500, stock: 0, category: "books" },
{ id: 4, name: "Headphones", price: 2000, stock: 3, category: "electronics" }
];

// ================== SIMULATED API ==================
function fetchProducts() {
return new Promise((resolve) => {
setTimeout(() => {
resolve(products);
}, 1500);
});
}

