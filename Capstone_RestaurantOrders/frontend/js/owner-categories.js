let editId = null;

// LOAD RESTAURANTS FIRST
window.onload = function () {
    loadRestaurants();
};

// LOAD RESTAURANTS INTO DROPDOWN
function loadRestaurants() {

    const token = localStorage.getItem("token");

    fetch("http://localhost:8082/api/restaurants", {
        headers: { Authorization: "Bearer " + token }
    })
    .then(res => res.json())
    .then(data => {

        const select = document.getElementById("restaurantSelect");

        data.forEach(r => {
            select.innerHTML += `<option value="${r.id}">${r.name}</option>`;
        });
    });
}

// LOAD CATEGORIES BASED ON SELECTED RESTAURANT
function loadCategories() {

    const token = localStorage.getItem("token");
    const restaurantId = document.getElementById("restaurantSelect").value;

    if (!restaurantId) return;

    fetch(`http://localhost:8082/api/categories/restaurant/${restaurantId}`, {
        headers: { Authorization: "Bearer " + token }
    })
    .then(res => res.json())
    .then(data => display(data));
}

// DISPLAY
function display(list) {

    const div = document.getElementById("list");
    div.innerHTML = "";

    list.forEach(c => {

        let imgList = [
    "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800",
    "https://images.unsplash.com/photo-1550547660-d9450f859349?w=800",
    "https://images.unsplash.com/photo-1594007654729-407eedc4be65?w=800",
    "https://images.unsplash.com/photo-1562967916-eb82221dfb92?w=800",
    "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=800"
];

const img = imgList[Math.floor(Math.random() * imgList.length)];

        div.innerHTML += `
            <div class="rest-card">

                <img src="${img}">

                <div class="rest-content">
                    <h3>${c.name}</h3>

                    <div class="rest-actions">
                        <button onclick="setEdit(${c.id}, '${c.name}')">Edit</button>
                        <button onclick="deleteCategory(${c.id})">Delete</button>
                    </div>
                </div>

            </div>
        `;
    });
}

// EDIT MODE
function setEdit(id, name) {
    editId = id;
    document.getElementById("name").value = name;
}

// SAVE (ADD / UPDATE)
function saveCategory() {

    const name = document.getElementById("name").value;
    const restaurantId = document.getElementById("restaurantSelect").value;
    const token = localStorage.getItem("token");

    if (!name || !restaurantId) {
        alert("Select restaurant + enter name ❌");
        return;
    }

    const url = editId
        ? `http://localhost:8082/api/categories/${editId}`
        : "http://localhost:8082/api/categories";

    const method = editId ? "PUT" : "POST";

    fetch(url, {
        method: method,
        headers: {
            "Authorization": "Bearer " + token,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name,
            restaurantId
        })
    })
    .then(res => res.json())
    .then(() => {

        alert(editId ? "Updated ✅" : "Added ✅");

        editId = null;
        document.getElementById("name").value = "";

        loadCategories();
    });
}

// DELETE
function deleteCategory(id) {

    const token = localStorage.getItem("token");

    fetch(`http://localhost:8082/api/categories/${id}`, {
        method: "DELETE",
        headers: { Authorization: "Bearer " + token }
    })
    .then(() => loadCategories())
    .catch(() => alert("Cannot delete (menu exists) ❌"));
}