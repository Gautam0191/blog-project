const openBtn = document.getElementById("openBtn");
const opnBtn2 = document.getElementById("opnBtn2");
const model = document.getElementById("popup");
const closeBtn = document.querySelector(".close");

// Get navigation elements
const mainNavbar = document.getElementById("mainNavbar");
const fixedNavbar = document.getElementById("fixedNavbar");

// 1. POPUP/MODAL CONTROLS
// ----------------------------------------------------------------

// Open modal via main button
if (openBtn) {
    openBtn.onclick = () => {
        model.style.display = "block";
    };
}

// Open modal via second button (if exists)
if (opnBtn2) {
    opnBtn2.onclick = () => {
        model.style.display = "block";
    };
}

// Close modal via 'X' button
if (closeBtn) {
    closeBtn.onclick = () => {
        model.style.display = "none";
    };
}

// Close when user clicks outside the modal
window.onclick = (e) => {
    if (e.target == model) {
        model.style.display = "none";
    }
};


// 2. SCROLL-TO-TOP FUNCTION
// ----------------------------------------------------------------
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth", // This enables smooth scrolling
    });
}
// Note: This function needs to be called from the HTML footer button (onclick="scrollToTop()")

// 3. LIKE BUTTON TOGGLE
// ----------------------------------------------------------------
const likebtn = document.querySelectorAll(".like-icon");
likebtn.forEach(function (icon) {
    icon.addEventListener("click", function () {
        icon.classList.toggle("liked");
    });
});


// 4. FIXED NAVBAR SCROLL LOGIC (UPDATED)
// ----------------------------------------------------------------
window.addEventListener("scroll", () => {
    // Check if both navbars exist before running logic
    if (mainNavbar && fixedNavbar) {
        // Calculate the height of the main (initial) navbar
        const mainNavbarHeight = mainNavbar.offsetHeight;
        
        // Use scrollY to check if the user has scrolled past the main navbar's height
        if (window.scrollY > mainNavbarHeight) {
            fixedNavbar.classList.add("show");
        } else {
            fixedNavbar.classList.remove("show");
        }
    }
});