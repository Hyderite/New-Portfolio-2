document.querySelector("#files").onmouseover = function () {
    document.querySelector("#explorer-btns").style.opacity = "1";
};

document.querySelector("#files").onmouseout = function () {
    document.querySelector("#explorer-btns").style.opacity = "0";
};

window.addEventListener('click', function (e) {
    if (document.querySelector("#files-container").contains(e.target)) {
        document.querySelector("#files-container").style.outline = "#0079F2 1px solid";
        document.querySelector("#explorer-btns").style.opacity = "1";
        document.querySelector("#files").onmouseout = function () {
            document.querySelector("#explorer-btns").style.opacity = "1";
        };
    } else {
        document.querySelector("#files-container").style.outline = "none";
        document.querySelector("#explorer-btns").style.opacity = "0";
        document.querySelector("#files").onmouseout = function () {
            document.querySelector("#explorer-btns").style.opacity = "0";
        };
    }
});

document.querySelector("#node-modules").onclick = function (e) {
    var textbox = document.querySelector("#textbox");
    var offset = textbox.parentElement.getBoundingClientRect();
    var tipDist = 15;
    textbox.innerHTML = "What are you trying to do?";
    textbox.style.top = (e.clientY - offset.top + tipDist) + 'px';
    textbox.style.left = (e.clientX - offset.left + tipDist) + 'px';
    textbox.style.display = "block";
    setTimeout(function () {
        textbox.style.display = "none";
    }, 2000);
};

document.querySelector("#public").onclick = function () {
    if (document.querySelector("#public-arrow").innerHTML == "stat_minus_1") {
        document.querySelector("#public-arrow").innerHTML = "chevron_right";
        document.querySelector("#css").style.display = "none";
        document.querySelector("#style-css").style.display = "none";
        document.querySelector("#js").style.display = "none";
        document.querySelector("#script-js").style.display = "none";
        document.querySelector("#index-html").style.display = "none";
    } else {
        document.querySelector("#public-arrow").innerHTML = "stat_minus_1";
        document.querySelector("#css").style.display = "flex";
        document.querySelector("#js").style.display = "flex";
        document.querySelector("#index-html").style.display = "flex";
        if (document.querySelector("#css-arrow").innerHTML == "stat_minus_1") {
            document.querySelector("#style-css").style.display = "flex";
        } else {
            document.querySelector("#style-css").style.display = "none";
        };
        if (document.querySelector("#js-arrow").innerHTML == "stat_minus_1") {
            document.querySelector("#script-js").style.display = "flex";
        } else {
            document.querySelector("#script-js").style.display = "none";
        };
    };
};

document.querySelector("#css").onclick = function () {
    if (document.querySelector("#css-arrow").innerHTML == "stat_minus_1") {
        document.querySelector("#css-arrow").innerHTML = "chevron_right";
        document.querySelector("#style-css").style.display = "none";
    } else {
        document.querySelector("#css-arrow").innerHTML = "stat_minus_1";
        document.querySelector("#style-css").style.display = "flex";
    };
};

document.querySelector("#js").onclick = function () {
    if (document.querySelector("#js-arrow").innerHTML == "stat_minus_1") {
        document.querySelector("#js-arrow").innerHTML = "chevron_right";
        document.querySelector("#script-js").style.display = "none";
    } else {
        document.querySelector("#js-arrow").innerHTML = "stat_minus_1";
        document.querySelector("#script-js").style.display = "flex";
    };
};

document.querySelector("#package-json").onclick = function (e) {
    var textbox = document.querySelector("#textbox2");
    var offset = textbox.parentElement.getBoundingClientRect();
    var tipDist = 15;
    textbox.innerHTML = "This is a json file. We don't have to change its contents for now.";
    textbox.style.top = (e.clientY - offset.top + tipDist) + 'px';
    textbox.style.left = (e.clientX - offset.left + tipDist) + 'px';
    textbox.style.display = "block";
    setTimeout(function () {
        textbox.style.display = "none";
    }, 5000);
};

document.querySelector("#package-lock-json").onclick = function (e) {
    var textbox = document.querySelector("#textbox3");
    var offset = textbox.parentElement.getBoundingClientRect();
    var tipDist = 15;
    textbox.innerHTML = "This is a json file. We don't have to change its contents for now.";
    textbox.style.top = (e.clientY - offset.top + tipDist) + 'px';
    textbox.style.left = (e.clientX - offset.left + tipDist) + 'px';
    textbox.style.display = "block";
    setTimeout(function () {
        textbox.style.display = "none";
    }, 5000);
};

var fileSelector = document.querySelector("#file-selector");

document.querySelector("#index-html").onclick = function () {
    fileSelector.style.display = "block";
    document.querySelector("#index-html-tab").style.display = "block";
};

if (fileSelector.style.display = "none") {
    document.querySelector("#style-css").onclick = function (e) {
        var textbox = document.querySelector("#textbox4");
        var offset = textbox.parentElement.getBoundingClientRect();
        var tipDist = 15;
        textbox.innerHTML = "We'll edit this file later.";
        textbox.style.top = (e.clientY - offset.top + tipDist) + 'px';
        textbox.style.left = (e.clientX - offset.left + tipDist) + 'px';
        textbox.style.display = "block";
        setTimeout(function () {
            textbox.style.display = "none";
        }, 2500);
    };

    document.querySelector("#script-js").onclick = function (e) {
        var textbox = document.querySelector("#textbox5");
        var offset = textbox.parentElement.getBoundingClientRect();
        var tipDist = 15;
        textbox.innerHTML = "We'll edit this file later.";
        textbox.style.top = (e.clientY - offset.top + tipDist) + 'px';
        textbox.style.left = (e.clientX - offset.left + tipDist) + 'px';
        textbox.style.display = "block";
        setTimeout(function () {
            textbox.style.display = "none";
        }, 2500);
    };
} else if (document.querySelector("#index-html-tab").style.display == "block") {
    document.querySelector("#style-css").onclick = function () {
        alert("it's working");
        document.querySelector("#style-css-tab").style.display = "block";
    };

    document.querySelector("#script-js").onclick = function (e) {
        var textbox = document.querySelector("#textbox5");
        var offset = textbox.parentElement.getBoundingClientRect();
        var tipDist = 15;
        textbox.innerHTML = "We'll edit this file later.";
        textbox.style.top = (e.clientY - offset.top + tipDist) + 'px';
        textbox.style.left = (e.clientX - offset.left + tipDist) + 'px';
        textbox.style.display = "block";
        setTimeout(function () {
            textbox.style.display = "none";
        }, 2500);
    };
} else if (document.querySelector("#style-css").style.display = "block") {
    document.querySelector("#script-js").onclick = function () {
        document.querySelector("#script-js-tab").style.display = "block";
    };
};


