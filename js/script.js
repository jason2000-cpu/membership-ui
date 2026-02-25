
function loadComponent(id, file) {
    fetch(file)
    .then(response => response.text())
    .then(data => {
        document.getElementById(id).innerHTML = data;
    });
}


loadComponent("memberCard", "./components/memberCard.html")
loadComponent("stats", "./components/statisticsGrid.html");
loadComponent("footer", "./components/footer.html");



document.addEventListener("click", function(e) {
    if (e.target.innerText === "Join") {
        alert("Membership Selected!");
    }
});