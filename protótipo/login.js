
let select = document.querySelector("#selecoes")
let button = document.querySelector("#butaum")


button.addEventListener('click',() => {
    if(select.value == "brasil") {
        window.location.href = "brasil.html" }
    else {
        window.location.href = "japao.html"
    }
})

