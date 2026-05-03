let editId = null;

// LOAD RESTAURANTS ON PAGE LOAD
window.onload = function () {
    loadRestaurants();
};

// LOAD RESTAURANTS DROPDOWN
function loadRestaurants() {

    const token = localStorage.getItem("token");

    fetch("http://localhost:8082/api/restaurants", {
        headers: { Authorization: "Bearer " + token }
    })
    .then(res => res.json())
    .then(data => {

        const select = document.getElementById("restaurantSelect");
        select.innerHTML = '<option value="">Select Restaurant</option>';

        data.forEach(r => {
            select.innerHTML += `<option value="${r.id}">${r.name}</option>`;
        });
    })
    .catch(err => console.error("Restaurant load error:", err));
}

// LOAD CATEGORIES BASED ON RESTAURANT
function loadCategories() {

    const token = localStorage.getItem("token");
    const restaurantId = document.getElementById("restaurantSelect").value;

    const categorySelect = document.getElementById("categorySelect");
    categorySelect.innerHTML = '<option value="">Select Category</option>';

    if (!restaurantId) return;

    fetch(`http://localhost:8082/api/categories/restaurant/${restaurantId}`, {
        headers: { Authorization: "Bearer " + token }
    })
    .then(res => res.json())
    .then(data => {

        data.forEach(c => {
            categorySelect.innerHTML += `<option value="${c.id}">${c.name}</option>`;
        });
    })
    .catch(err => console.error("Category load error:", err));
}

// LOAD MENU ITEMS
function loadMenu() {

    const token = localStorage.getItem("token");
    const categoryId = document.getElementById("categorySelect").value;

    if (!categoryId) return;

    fetch(`http://localhost:8082/api/menu-items/category/${categoryId}`, {
        headers: { Authorization: "Bearer " + token }
    })
    .then(res => res.json())
    .then(data => displayMenu(data))
    .catch(err => console.error("Menu load error:", err));
}

// DISPLAY MENU ITEMS
function displayMenu(list) {

    const div = document.getElementById("list");
    div.innerHTML = "";

    if (!list || list.length === 0) {
        div.innerHTML = "<p>No items found</p>";
        return;
    }

    list.forEach(item => {

        // CONCEPTUAL IMAGE LOGIC
        let img = "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800";

        const name = item.name.toLowerCase();

        if(name.includes("pizza"))
            img = "https://images.unsplash.com/photo-1594007654729-407eedc4be65?w=800";

        else if(name.includes("burger"))
            img = "https://images.unsplash.com/photo-1550547660-d9450f859349?w=800";

        else if(name.includes("chicken"))
            img = "https://images.unsplash.com/photo-1562967916-eb82221dfb92?w=800";

        else if(name.includes("drink") || name.includes("cola"))
            img = "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=800";

        else if(name.includes("dessert") || name.includes("cake"))
            img = "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=800";

        else if(name.includes("pasta") || name.includes("noodle"))
            img = "https://images.unsplash.com/photo-1525755662778-989d0524087e?w=800";

        div.innerHTML += `
            <div class="rest-card">

                <img src="${img}" 
                     onerror="this.src='https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800'">

                <div class="rest-content">
                    <h3>${item.name}</h3>
                    <p>₹${item.price}</p>

                    <div class="rest-actions">
                        <button onclick="setEdit(${item.id}, '${item.name}', ${item.price})">Edit</button>
                        <button onclick="deleteItem(${item.id})">Delete</button>
                    </div>
                </div>

            </div>
        `;
    });
}
// SET EDIT MODE
function setEdit(id, name, price) {

    editId = id;

    document.getElementById("name").value = name;
    document.getElementById("price").value = price;
}

// ADD / UPDATE MENU ITEM
function saveMenu() {

    const name = document.getElementById("name").value;
    const price = document.getElementById("price").value;
    const categoryId = document.getElementById("categorySelect").value;
    const restaurantId = document.getElementById("restaurantSelect").value;

    const token = localStorage.getItem("token");

    if (!name || !price || !categoryId || !restaurantId) {
        alert("Fill all fields ❌");
        return;
    }

    const url = editId
        ? `http://localhost:8082/api/menu-items/${editId}`
        : "http://localhost:8082/api/menu-items";

    const method = editId ? "PUT" : "POST";

    fetch(url, {
        method: method,
        headers: {
            "Authorization": "Bearer " + token,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: name,
            price: price,
            categoryId: categoryId,
            restaurantId: restaurantId   
        })
    })
    .then(res => {
        if (!res.ok) throw new Error("Operation failed");
        return res.text();
    })
    .then(() => {

        alert(editId ? "Updated ✅" : "Added ✅");

        editId = null;

        document.getElementById("name").value = "";
        document.getElementById("price").value = "";

        loadMenu(); 
    })
    .catch(err => {
        console.error(err);
        alert("Error ❌");
    });
}

// DELETE MENU ITEM
function deleteItem(id) {

    const token = localStorage.getItem("token");

    fetch(`http://localhost:8082/api/menu-items/${id}`, {
        method: "DELETE",
        headers: { Authorization: "Bearer " + token }
    })
    .then(res => {
        if (!res.ok) throw new Error("Delete failed");
        alert("Deleted ✅");
        loadMenu();
    })
    .catch(err => {
        console.error(err);
        alert("Delete failed ❌");
    });
}