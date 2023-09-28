document.querySelector("#files").onmouseover = function () {
    document.querySelector("#explorer-btns").style.opacity = "1";
}

document.querySelector("#files").onmouseout = function () {
    document.querySelector("#explorer-btns").style.opacity = "0";
}