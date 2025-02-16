function filterProducts() {
    const filterValue = document.getElementById('category-filter').value;
    const products = document.querySelectorAll('.product');

    products.forEach(product => {

        if (filterValue === 'all') {
            product.style.display = 'block'; 
        } else if (product.classList.contains(filterValue)) {
            product.style.display = 'block'; 
        } else {
            product.style.display = 'none'; 
        }
    });
}
