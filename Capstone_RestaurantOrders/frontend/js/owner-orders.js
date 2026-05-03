window.onload = function () {
    loadOrders();
};

// LOAD ALL ORDERS
function loadOrders() {

    const token = localStorage.getItem("token");

    fetch("http://localhost:8082/api/orders/all", {
        headers: { Authorization: "Bearer " + token }
    })
    .then(res => res.json())
    .then(data => displayOrders(data))
    .catch(err => console.error(err));
}

// DISPLAY ORDERS
function displayOrders(orders) {

    const container = document.getElementById("ordersList");
    container.innerHTML = "";

    if (!orders || orders.length === 0) {
        container.innerHTML = "<p>No orders found</p>";
        return;
    }

    orders.forEach(order => {

        const img = "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800";

        let buttons = "";

        if(order.status === "PLACED"){
    buttons = `
        <button onclick="updateStatus(${order.orderId}, 'PENDING')">Accept</button>
        <button onclick="updateStatus(${order.orderId}, 'CANCELLED')">Reject</button>
    `;
}
else if(order.status === "PENDING"){
    buttons = `
        <button onclick="updateStatus(${order.orderId}, 'DELIVERED')">Mark Delivered</button>
    `;
}

        container.innerHTML += `
            <div class="owner-order-card">

                <img src="${img}"
                     onerror="this.src='https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800'">

                <div class="order-info">
                    <h3>Order #${order.orderId}</h3>
                    <p>Total: ₹${order.totalAmount}</p>
                    <p class="status ${order.status}">Status: ${order.status}</p>
                    <p>Time: ${new Date(order.createdAt).toLocaleString()}</p>

                    <div class="order-actions">
                        ${buttons}
                    </div>
                </div>

            </div>
        `;
    });
}

// UPDATE STATUS
function updateStatus(orderId, status) {

    if(!confirm("Are you sure?")) return;

    const token = localStorage.getItem("token");

    fetch(`http://localhost:8082/api/orders/updateStatus/${orderId}?status=${status}`, {
        method: "PUT",
        headers: { Authorization: "Bearer " + token }
    })
    .then(res => res.text())
    .then(msg => {
        alert(msg);
        loadOrders();
    })
    .catch(() => alert("Update failed ❌"));
}