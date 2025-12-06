document.getElementById("mode-btn").addEventListener("click", function () {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        this.innerText = "Light Mode";
    } else {
        this.innerText = "Dark Mode";
    }
});

