window.onload = function () {
    loadWallet();   
    loadOrders();   
};

//  LOAD ORDERS
function loadOrders() {

    const userId = localStorage.getItem("userId");
    const token = localStorage.getItem("token");

    fetch(`http://localhost:8082/api/orders/user/${userId}`, {
        headers: {
            "Authorization": "Bearer " + token
        }
    })
    .then(res => res.json())
    .then(data => {
        console.log("Orders:", data);
        displayOrders(data);
    })
    .catch(err => console.error("Order fetch error:", err));
}

//  DISPLAY ORDERS
function displayOrders(orders) {

    const container = document.getElementById("ordersList");
    container.innerHTML = "";

    if (!orders || orders.length === 0) {
        container.innerHTML = "<p>No orders yet</p>";
        return;
    }

    orders.forEach(order => {

        const createdTime = new Date(order.createdAt);
        const now = new Date();

        const diffSeconds = (now - createdTime) / 1000;

        const canCancel =
            diffSeconds <= 30 && order.status === "PLACED";

        //  image logic
        let img = "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800";

        container.innerHTML += `
            <div class="order-card">

                <img src="${img}"
                     onerror="this.src='https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800'">

                <div class="order-content">
                    <h3>Order #${order.orderId}</h3>
                    <p>Total: ₹${order.totalAmount}</p>
                    <p class="status ${order.status}">Status: ${order.status}</p>
                    <p>Time: ${new Date(order.createdAt).toLocaleString()}</p>

                    ${
                        canCancel
                        ? `<button onclick="cancelOrder(${order.orderId})">Cancel ❌</button>`
                        : ""
                    }
                </div>

            </div>
        `;
    });
}

//  CANCEL ORDER
function cancelOrder(orderId) {

    const token = localStorage.getItem("token");

    fetch(`http://localhost:8082/api/orders/cancel/${orderId}`, {
        method: "DELETE",
        headers: {
            "Authorization": "Bearer " + token
        }
    })
    .then(res => {
        if (!res.ok) throw new Error("Cancel failed");
        return res.text();
    })
    .then(msg => {
        alert(msg);
        loadWallet();   
        loadOrders();  
    })
    .catch(err => {
        console.error(err);
        alert("Cancel failed ❌");
    });
}

//  WALLET
function loadWallet() {

    const userId = localStorage.getItem("userId");
    const token = localStorage.getItem("token");

    if (!userId || !token) return;

    fetch(`http://localhost:8082/api/users/${userId}`, {
        headers: {
            "Authorization": "Bearer " + token
        }
    })
    .then(res => res.json())
    .then(data => {
        document.getElementById("wallet").innerText =
            "💰 Wallet: ₹" + data.walletBalance;
    })
    .catch(err => console.error("Wallet error:", err));
}