document.addEventListener("click", function (e) {
    if (e.target.closest(".cart-icon-wrapper")) {
        window.location.href = "/shop/cart";
    }
});

// let mobileMenu = document.getElementById("mobileMenu")
// mobileMenu.addEventListener("click", function(e) {

//     var link = e.target.closest("A")
//     if(link){
//         var offcanvas = bootstrap.Offcanvas.getInstance(mobileMenu);
//         offcanvas.hide();
//     }

// });

// let mobileMenu = document.getElementById("mobileMenu");

// if (mobileMenu) {
//     mobileMenu.addEventListener("click", function (e) {

//         var link = e.target.closest("a");

//         if (link) {

//             // bootstrap loaded কিনা check
//             if (window.bootstrap) {

//                 var offcanvas = bootstrap.Offcanvas.getOrCreateInstance(mobileMenu);
//                 offcanvas.hide();

//             } else {
//                 // console.log("Bootstrap not loaded yet");
//                 alert("Bootstrap is not loaded yet");
//             }

//         }

//     });
// }

var mobileMenu = document.getElementById("mobileMenu");
if (mobileMenu) {
    mobileMenu.addEventListener("click", function (e) {
        var link = e.target.closest("a");
        if (link) {
            // Vanilla JS - no bootstrap object needed
            mobileMenu.classList.remove("show");
            document.querySelector(".offcanvas-backdrop")?.remove();
            document.body.classList.remove("offcanvas-open");
            document.body.style.overflow = "";
            document.body.style.paddingRight = "";
        }
    });
}

var mobileSearch = document.getElementById("mobileSearch");
if (mobileSearch) {
    mobileSearch.addEventListener("click", function (e) {
        var link = e.target.closest("a");
        if (link) {
            // Vanilla JS - no bootstrap object needed
            mobileSearch.classList.remove("show");
            document.querySelector(".offcanvas-backdrop")?.remove();
            document.body.classList.remove("offcanvas-open");
            document.body.style.overflow = "";
            document.body.style.paddingRight = "";
        }
    });
}

