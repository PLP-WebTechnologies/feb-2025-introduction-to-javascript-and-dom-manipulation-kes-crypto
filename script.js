// Change Text Content
document.getElementById("change-text-btn").addEventListener("click", function() {
    document.getElementById("title").textContent = "Text Changed! Welcome!";
});

// Toggle Background Style
document.getElementById("toggle-style-btn").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});

// Add a New Element
document.getElementById("add-element-btn").addEventListener("click", function() {
    let newParagraph = document.createElement("p");
    newParagraph.textContent = "This is a dynamically added paragraph!";
    document.getElementById("dynamic-container").appendChild(newParagraph);
});

// Remove Last Added Element
document.getElementById("remove-element-btn").addEventListener("click", function() {
    let container = document.getElementById("dynamic-container");
    if (container.lastChild) {
        container.removeChild(container.lastChild);
    }
});
