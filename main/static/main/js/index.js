function seeMore(clicked_id) {
    let element = document.getElementById("introduction")
    element.style.height = "100%"

    let btn = document.getElementById(clicked_id)
    btn.style.display = "none"
}
