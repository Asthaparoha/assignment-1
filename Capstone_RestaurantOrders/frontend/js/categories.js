window.onload = function () {
    console.log("CATEGORIES PAGE LOADED");

    const restaurantId = localStorage.getItem("restaurantId");
    const token = localStorage.getItem("token");

    if (!restaurantId) {
        alert("No restaurant selected ❌");
        window.location.href = "home.html";
        return;
    }

    fetch(`http://localhost:8082/api/categories/restaurant/${restaurantId}`, {
        headers: {
            "Authorization": "Bearer " + token
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error("Failed to fetch categories");
        }
        return response.json();
    })
    .then(data => {
        displayCategories(data);
    })
    .catch(error => {
        console.error("Error:", error);
        alert("Error loading categories ❌");
    });
};

function displayCategories(categories) {

    const container = document.getElementById("categoryList");
    container.innerHTML = "";

    categories.forEach(c => {

        //  IMAGE LOGIC
        let imageUrl = "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800";

        const name = c.name.toLowerCase();

        if(name.includes("pizza"))
            imageUrl = "https://images.unsplash.com/photo-1594007654729-407eedc4be65?w=800";

        else if(name.includes("burger"))
            imageUrl = "https://images.unsplash.com/photo-1550547660-d9450f859349?w=800";

        else if(name.includes("dessert"))
            imageUrl = "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=800";

        else if(name.includes("drink"))
            imageUrl = "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=800";

        else if(name.includes("chicken"))
            imageUrl = "https://images.unsplash.com/photo-1562967916-eb82221dfb92?w=800";

        //  CARD UI
        const div = document.createElement("div");
        div.className = "category-card";

        div.innerHTML = `
            <img src="${imageUrl}" 
                 onerror="this.src='https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800'">
            <div class="category-content">
                ${c.name}
            </div>
        `;

        div.onclick = () => {
            localStorage.setItem("categoryId", c.id);
            window.location.href = "menu.html";
        };

        container.appendChild(div);
    });
}