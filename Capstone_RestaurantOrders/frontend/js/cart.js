window.onload = function(){

  const token = localStorage.getItem("token");

  if(!token){
    alert("Please login first ❌");
    window.location.href = "login.html";
    return;
  }

  loadWallet();
  loadCart();
};

//  LOAD CART 
function loadCart() {

    const userId = localStorage.getItem("userId");
    const token = localStorage.getItem("token");

    fetch(`http://localhost:8082/api/cart/${userId}`, {
        headers: { "Authorization": "Bearer " + token }
    })
    .then(res => res.json())
    .then(data => displayCart(data));
}

function displayCart(cart) {

    const container = document.getElementById("cartList");
    const totalDiv = document.getElementById("totalAmount");

    container.innerHTML = "";

    if (!cart.items || cart.items.length === 0) {
        container.innerHTML = "<p>Your cart is empty</p>";
        return;
    }

    cart.items.forEach(item => {

        //  image logic
        let img = "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800";

        const name = item.itemName.toLowerCase();

        if(name.includes("pizza"))
            img = "https://images.unsplash.com/photo-1594007654729-407eedc4be65?w=800";

        else if(name.includes("burger"))
            img = "https://images.unsplash.com/photo-1550547660-d9450f859349?w=800";

        else if(name.includes("chicken"))
            img = "https://images.unsplash.com/photo-1562967916-eb82221dfb92?w=800";

        container.innerHTML += `
            <div class="cart-item">
                <img src="${img}" 
                     onerror="this.src='https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800'">

                <div class="cart-item-content">
                    <h3>${item.itemName}</h3>
                    <p>₹${item.price} × ${item.quantity}</p>
                    <button onclick="removeItem(${item.cartItemId})">Remove</button>
                </div>
            </div>
        `;
    });

    totalDiv.innerText = "₹ " + cart.totalAmount;
}
function removeItem(cartItemId) {

    const token = localStorage.getItem("token");

    fetch(`http://localhost:8082/api/cart/item/${cartItemId}`, {
        method: "DELETE",
        headers: { "Authorization": "Bearer " + token }
    })
    .then(() => {
        loadCart();     
        loadWallet();   
    });
}

//  PLACE ORDER
function placeOrder() {

    const userId = localStorage.getItem("userId");
    const token = localStorage.getItem("token");

    const street = document.getElementById("street").value;
    const city = document.getElementById("city").value;
    const state = document.getElementById("state").value;
    const zip = document.getElementById("zip").value;

    if (!street || !city || !state || !zip) {
        alert("Fill address properly ❌");
        return;
    }

    fetch("http://localhost:8082/api/orders/place", {
        method: "POST",
        headers: {
            "Authorization": "Bearer " + token,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            userId: userId,
            street: street,
            city: city,
            state: state,
            zipCode: zip
        })
    })
    .then(res => {
        if (!res.ok) throw new Error("Order failed");
        return res.text();
    })
    .then(data => {
        alert(data);
        loadWallet();   
        window.location.href = "orders.html";
    })
    .catch(err => {
        console.error(err);
        alert("Order failed ❌");
    });
}

// WALLET FUNCTION
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
    .catch(err => console.error(err));
}
function logout(){
  localStorage.clear();
  window.location.href = "index.html";
}