//initialize variables
let form_title = document.querySelector(".log__in__form__title");
let login = document.querySelector("#log__in");
let splashWindow = document.querySelector(".log__in__window");
let form = document.querySelector(".log__in__form");
let quit = document.querySelector("#quit");
let DnD__window = splashWindow.querySelector('.log__in__form');

//add quit and open listener to window
login.addEventListener("click", function () {
    splashWindow.classList.remove('display__none');
});

quit.onclick = function () {
    splashWindow.classList.add("display__none");
}

//add DnD listener to our window with form
DnD__window.addEventListener("mousedown", function(e) {
    let shiftX = e.pageX - form.getBoundingClientRect().left;
    let shiftY = e.pageY - form.getBoundingClientRect().top;

    document.onmouseup = function() {
        document.onmousemove = null;
    }

    document.onmousemove = function(e) {
        form.style.left = (e.pageX - shiftX) + "px";
        form.style.top = (e.pageY - shiftY) + "px";
    }
});