// ===============================
// Dark Mode with localStorage
// ===============================

document.addEventListener("DOMContentLoaded", function () {

    // Create Dark Mode Button
    const toggleBtn = document.createElement("button");
    toggleBtn.className = "btn btn-dark btn-sm position-fixed";
    toggleBtn.style.bottom = "20px";
    toggleBtn.style.right = "20px";
    toggleBtn.style.zIndex = "1000";
    toggleBtn.style.borderRadius = "50%";
    toggleBtn.style.width = "50px";
    toggleBtn.style.height = "50px";
    document.body.appendChild(toggleBtn);

    // Load saved preference
    let isDarkMode = localStorage.getItem("darkMode") === "enabled";

    function applyDarkMode() {

        document.body.style.backgroundColor = isDarkMode ? "#1a1a2e" : "#ffffff";
        document.body.style.color = isDarkMode ? "#ffffff" : "#000000";

        toggleBtn.innerHTML = isDarkMode ? "☀️" : "🌙";

        const navbar = document.querySelector(".navbar");

        if (navbar) {
            navbar.classList.toggle("bg-dark", isDarkMode);
            navbar.classList.toggle("bg-primary", !isDarkMode);
        }

        const cards = document.querySelectorAll(".card");

        cards.forEach(card => {
            card.style.backgroundColor = isDarkMode ? "#2b2d42" : "#ffffff";
            card.style.color = isDarkMode ? "#ffffff" : "#000000";
        });

        const accordionItems = document.querySelectorAll(".accordion-item");

        accordionItems.forEach(item => {
            item.style.backgroundColor = isDarkMode ? "#2b2d42" : "#ffffff";
            item.style.color = isDarkMode ? "#ffffff" : "#000000";
        });

        localStorage.setItem(
            "darkMode",
            isDarkMode ? "enabled" : "disabled"
        );
    }

    applyDarkMode();

    toggleBtn.addEventListener("click", function () {
        isDarkMode = !isDarkMode;
        applyDarkMode();
    });

});

// ===============================
// FAQ Search
// ===============================

const faqSearch = document.getElementById("faqSearch");

if (faqSearch) {

    faqSearch.addEventListener("keyup", function () {

        const filter = this.value.toLowerCase();

        const items = document.querySelectorAll(".accordion-item");

        items.forEach(function (item) {

            const question =
                item.querySelector(".accordion-button").textContent.toLowerCase();

            const answer =
                item.querySelector(".accordion-body").textContent.toLowerCase();

            if (
                question.includes(filter) ||
                answer.includes(filter)
            ) {
                item.style.display = "";
            } else {
                item.style.display = "none";
            }

        });

    });

}

console.log("TechHaven loaded successfully!");