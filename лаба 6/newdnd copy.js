let Div= document.querySelector(".Div");
let Best_id = document.querySelector("#Best_id");
let modal = document.querySelector(".modal");
let form = document.querySelector(".form_for_login");
let exit = document.querySelector("#exit");
let form_log = document.querySelector('.modal');
let draggable = form_log.querySelector('.form_for_login');

Best_id.addEventListener("click", function () {
    modal.classList.remove('block_hide');
});

exit.onclick = function () {
    modal.classList.add("block_hide");
}

draggable.addEventListener("mousedown", function(e) {
    let pos = form.getBoundingClientRect();
    let shiftX = e.pageX - pos.left;
    let shiftY = e.pageY - pos.top;

    document.onmousemove = function(e) {
        form.style.left = (e.pageX - shiftX) + "px";
        form.style.top = (e.pageY - shiftY) + "px";
    }

    document.onmouseup = function() {
        document.onmousemove = null;
        document.onmouseup = null;
    }
});