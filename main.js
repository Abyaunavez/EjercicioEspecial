document.addEventListener('DOMContentLoaded', function() {
    // Selecciona el botón por su clase
    const loadButton = document.querySelector('.btn-primary.my-2');
    // Selecciona el contenedor de productos
    const productContainer = document.querySelector('.row.row-cols-1.row-cols-sm-2.row-cols-md-3.g-3');

    loadButton.addEventListener('click', function() {
        // Llamada a la API para obtener productos
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(products => {
                // Limpia cualquier contenido previo
                productContainer.innerHTML = '';

                // Llenar las tarjetas con los productos
                products.slice(0, 9).forEach(product => {
                    const productCard = `
                        <div class="col">
                            <div class="card shadow-sm">
                                <img src="${product.image}" class="bd-placeholder-img card-img-top" width="100%" height="225" alt="${product.title}">
                                <div class="card-body">
                                    <h5 class="card-title">${product.title}</h5>
                                    <p class="card-text">${product.description}</p>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <div class="btn-group">
                                            <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                                            <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                                        </div>
                                        <small class="text-body-secondary">$${product.price}</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `;
                    // Inserta la tarjeta de producto en el contenedor
                    productContainer.innerHTML += productCard;
                });
            })
            .catch(error => console.error('Error:', error));
    });
});
