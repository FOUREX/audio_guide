function seeMore(clicked_id) {
    let element = document.getElementById("introduction-other")
    element.style.display = "block"

    let btn = document.getElementById(clicked_id)
    btn.style.display = "none"
}

function menuButton(clicked_id) {
    let element = document.getElementById("menu-content")
    let button = document.getElementById(clicked_id)

    if (element.style.display === "none") {
        element.style.display = "block"
        button.style.borderRadius = "10px 10px 0 0"
    } else {
        element.style.display = "none"
        button.style.borderRadius = "10px"
    }
}

function menuContent(clicked_id) {
    let element = document.getElementById(clicked_id)
    element.style.display = "none"
}
