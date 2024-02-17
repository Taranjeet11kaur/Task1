
    window.addEventListener("scroll", function() {
        var navbar = document.getElementById("navbar");
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = "#d537cd";
        } else {
            navbar.style.backgroundColor = "#f186d1";
        }
    });
