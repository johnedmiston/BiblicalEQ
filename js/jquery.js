document.addEventListener("DOMContentLoaded", function() {
     $("#navbar-plh").load("/html-elem/navbar.html", function() {
         console.log("Navbar loaded successfully");
         document.dispatchEvent(new Event("navbarLoaded"));
     });
    $("#footer-plh").load("/html-elem/footer.html", function() {
        console.log("Footer loaded successfully");
        document.dispatchEvent(new Event("footerLoaded"));
    });
});

    