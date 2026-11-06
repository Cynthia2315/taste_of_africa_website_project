

// Contact form
const form = document.getElementById("contactForm");

if (form) {
    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const message = document.getElementById("message").value;

        if (message.length <= 20) {
            alert("Please write a longer message.");
        } else {
            form.style.display = "none";
            document.getElementById("response").textContent =
                "Thank you, " + name + "!";
        }
    });
}

// Favorite recipes
const buttons = document.querySelectorAll(".favorite");

buttons.forEach(button => {
    button.addEventListener("click", function() {
        this.textContent = "❤️ Favorited";
    });
});

// Filter recipes
const filters = document.querySelectorAll(".filters button");
const recipes = document.querySelectorAll(".recipe-card");

filters.forEach(button => {
    button.addEventListener("click", function() {
        recipes.forEach(recipe => {
            if (this.dataset.region === "all" ||
                this.dataset.region === recipe.dataset.region) {
                recipe.style.display = "block";
            } else {
                recipe.style.display = "none";
            }
        });
    });
});
