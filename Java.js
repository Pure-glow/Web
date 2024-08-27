document.addEventListener("DOMContentLoaded", function() {
    function increaseQuantity(event) {
        const quantityInput = event.currentTarget.parentElement.previousElementSibling;
        let quantity = parseInt(quantityInput.value);
        quantityInput.value = quantity + 1;
    }

    function decreaseQuantity(event) {
        const quantityInput = event.currentTarget.parentElement.previousElementSibling;
        let quantity = parseInt(quantityInput.value);
        if (quantity > 1) {
            quantityInput.value = quantity - 1;
        }
    }

    function addToCart(event) {
        const quantityInput = event.currentTarget.parentElement.previousElementSibling.querySelector(".product-quantity");
        const quantity = quantityInput.value;
        alert(`Agregaste ${quantity} producto(s) al carrito.`);
    }

    // Asignar funciones a los botones de cantidad
    document.querySelectorAll(".increase-btn").forEach(button => {
        button.addEventListener("click", increaseQuantity);
    });

    document.querySelectorAll(".decrease-btn").forEach(button => {
        button.addEventListener("click", decreaseQuantity);
    });

    // Asignar función al ícono del carrito
    document.querySelectorAll(".cart-icon").forEach(icon => {
        icon.addEventListener("click", addToCart);
    });
});
