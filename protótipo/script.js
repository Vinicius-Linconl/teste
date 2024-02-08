let openMenu = document.querySelector("#menu")
let menu = document.querySelector(".menu-lateral")

openMenu.onclick = function(event) {
    menu.style.display = "block"
}

let closeMenu = document.querySelector("#container-img")

closeMenu.onclick = function(event) {
    menu.style.display = "none"
}