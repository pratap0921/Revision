let elem = document.querySelectorAll(".ele");

elem.forEach(function (val) {
    val.addEventListener("mousemove", function () {
        val.childNodes[1].style.opacity = 1
        val.style.backgroundColor = "#060400";
        val.style.fontSize = "20px";
    })
    val.addEventListener("mouseleave", function () {
        val.childNodes[1].style.opacity = 0
        val.style.backgroundColor = "transparent";
        val.style.fontSize = "30px";
    })
});
alert("click ok to enter!")