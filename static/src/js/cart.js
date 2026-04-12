document.addEventListener("click", function (e) {
    if (e.target.closest(".cart-icon-wrapper")) {
        window.location.href = "/shop/cart";
    }
});