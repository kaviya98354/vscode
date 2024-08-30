document.addEventListener('DOMContentLoaded', () => {
    const cartItems = [];
    const cartItemsList = document.getElementById('cart-items');
    const totalPriceElem = document.getElementById('total-price');
    
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', (event) => {
            const productDiv = event.target.closest('.product');
            const productId = productDiv.dataset.id;
            const productName = productDiv.querySelector('h2').textContent;
            const productPrice = parseFloat(productDiv.querySelector('p').textContent.replace('$', ''));

            cartItems.push({ id: productId, name: productName, price: productPrice });
            updateCart();
        });
    });

    function updateCart() {
        cartItemsList.innerHTML = '';
        let totalPrice = 0;
        
        cartItems.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.className = 'remove-from-cart';
            removeButton.addEventListener('click', () => {
                removeItemFromCart(item.id);
            });

            li.appendChild(removeButton);

            cartItemsList.appendChild(li);
            totalPrice += item.price;
        });

        totalPriceElem.textContent = `Total: $${totalPrice.toFixed(2)}`;
    }

    function removeItemFromCart(productId) {
        // Remove item from cartItems array
        const index = cartItems.findIndex(item => item.id === productId);
        if (index !== -1) {
            cartItems.splice(index, 1);
            updateCart(); // Refresh the cart display
        }
    }

    // Clear all items from the cart
    clearCartButton.addEventListener('click', () => {
        cartItems.length = 0; // Clear the array
        updateCart(); // Refresh the cart display
    });
});
