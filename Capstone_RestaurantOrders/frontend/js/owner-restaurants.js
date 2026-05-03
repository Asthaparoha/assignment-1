let editId = null;

window.onload = function () {
    loadRestaurants();
};

// LOAD
function loadRestaurants() {

    const token = localStorage.getItem("token");

    fetch("http://localhost:8082/api/restaurants", {
        headers: { Authorization: "Bearer " + token }
    })
    .then(res => res.json())
    .then(data => display(data));
}

// DISPLAY
function display(list) {

    const div = document.getElementById("list");
    div.innerHTML = "";

    list.forEach(r => {

        let img = "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800";

        const name = r.name.toLowerCase();

        if(name.includes("pizza"))
            img = "https://images.unsplash.com/photo-1594007654729-407eedc4be65?w=800";

        else if(name.includes("burger"))
            img = "https://images.unsplash.com/photo-1550547660-d9450f859349?w=800";

        else if(name.includes("kfc") || name.includes("chicken"))
            img = "https://images.unsplash.com/photo-1562967916-eb82221dfb92?w=800";

        div.innerHTML += `
            <div class="rest-card">

                <img src="${img}" 
                     onerror="this.src='https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800'">

                <div class="rest-content">
                    <h3>${r.name}</h3>
                    <p>${r.description}</p>
                    <p>${r.location}</p>

                    <div class="rest-actions">
                        <button onclick="setEdit(${r.id}, '${r.name}', '${r.description}', '${r.location}')">Edit</button>
                        <button onclick="deleteRestaurant(${r.id})">Delete</button>
                    </div>
                </div>

            </div>
        `;
    });
}

// SET EDIT MODE
function setEdit(id, name, description, location) {

    editId = id;

    document.getElementById("name").value = name;
    document.getElementById("description").value = description;
    document.getElementById("location").value = location;
}

// ADD / UPDATE (SAME FUNCTION)
function addRestaurant() {

    const name = document.getElementById("name").value;
    const description = document.getElementById("description").value;
    const location = document.getElementById("location").value;

    const token = localStorage.getItem("token");

    if (!name || !description || !location) {
        alert("Fill all fields ❌");
        return;
    }

    const url = editId
        ? `http://localhost:8082/api/restaurants/${editId}`
        : "http://localhost:8082/api/restaurants";

    const method = editId ? "PUT" : "POST";

    fetch(url, {
        method: method,
        headers: {
            "Authorization": "Bearer " + token,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name,
            description,
            location
        })
    })
    .then(res => {
        if (!res.ok) throw new Error("Operation failed");
        return res.json();
    })
    .then(() => {
        alert(editId ? "Updated ✅" : "Added ✅");

        editId = null;

        document.getElementById("name").value = "";
        document.getElementById("description").value = "";
        document.getElementById("location").value = "";

        loadRestaurants();
    })
    .catch(err => {
        console.error(err);
        alert("Error ❌");
    });
}

// DELETE (WORKS ONLY FOR EMPTY RESTAURANTS)
function deleteRestaurant(id) {

    const token = localStorage.getItem("token");

    fetch(`http://localhost:8082/api/restaurants/${id}`, {
        method: "DELETE",
        headers: { Authorization: "Bearer " + token }
    })
    .then(res => {
        if (!res.ok) throw new Error("Cannot delete (has dependencies)");
        alert("Deleted ✅");
        loadRestaurants();
    })
    .catch(err => {
        console.error(err);
        alert("Delete blocked (has menu/category) ❌");
    });
}