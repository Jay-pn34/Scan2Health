document.getElementById("submit-button").addEventListener("click", function() {
    const barcode = document.getElementById("barcode-input").value;
    if (!barcode) {
        alert("Please enter a barcode.");
        return;
    }
    
    fetch(`https://world.openfoodfacts.org/api/v0/product/${barcode}.json`)
        .then(response => response.json())
        .then(data => {
            if (data.status === 1) {
                displayProductInfo(data.product);
            } else {
                document.getElementById("details").innerHTML = "<p>Product not found.</p>";
            }
        })
        .catch(error => {
            console.error("Error fetching data:", error);
            document.getElementById("details").innerHTML = "<p>Error retrieving product details.</p>";
        });
});

function displayProductInfo(product) {
    const detailsDiv = document.getElementById("details");
    detailsDiv.innerHTML = `
        <h3>${product.product_name || "Unknown Product"}</h3>
        <img src="${product.image_url || "https://via.placeholder.com/150"}" alt="Product Image" style="max-width: 200px;">
        <p><strong>Brand:</strong> ${product.brands || "N/A"}</p>
        <p><strong>Ingredients:</strong> ${product.ingredients_text || "N/A"}</p>
        <p><strong>Nutritional Info:</strong> ${product.nutriments ? JSON.stringify(product.nutriments) : "N/A"}</p>
    `;
}
