let reg = document.querySelector('#bratton');
let check = document.querySelector('#agreed');
let loginptid = document.querySelector('#loginptid');
let inputname = document.querySelector("#inputname");
let inputfamilia = document.querySelector("#inputfamilia");
let inputlogin = document.querySelector("#inputlogin");
let inputemail = document.querySelector("#inputemail");
let inputpass = document.querySelector("#inputpass");
let confirmpass = document.querySelector("#confirmpass");
let inputObject = {};

check.addEventListener('change', function () {
    if (!check.checked)  reg.disabled = true;      
    else  reg.disabled = false;
});

inputname.addEventListener("input", function() {
    let re = /[A-Za-zА-Яа-я-^\s]{2,50}/.test(this.value);

    if (!re) {
        inputname.classList.add('inputnpvailid');
    } else {
        inputname.classList.remove('inputnpvailid');
    }
});

inputfamilia.addEventListener("input", function() {
    let re = /[A-Za-zА-Яа-я-^\s]{2,50}/.test(this.value);
   
    if (!re) {
        inputfamilia.classList.add('inputnpvailid');
    } else {
        inputfamilia.classList.remove('inputnpvailid');
    }
});

inputname.addEventListener("change", function () {
    let regex = /[A-Za-zА-Яа-я-^\s]{2,50}/.test(this.value);

    if (regex && !inputname.classList.contains('inputnpvailid')) {
        inputObject['name'] = this.value;
    }
});

inputfamilia.addEventListener("change", function () {
    let regex = /[A-Za-zА-Яа-я-^\s]{2,50}/.test(this.value);

    if (regex && !inputfamilia.classList.contains('inputnpvailid')) {
        inputObject['familia'] = this.value;
    }
});

inputlogin.addEventListener("input", function () {
    let regex = /^[a-zA-Z0-9\-@.+_]+$/.test(this.value);
    let onlyworddigitspecialsym = document.querySelector('#onlyworddigitspecialsym');

    if (regex) {
        onlyworddigitspecialsym.classList.remove('vailidNOsolution');
        onlyworddigitspecialsym.classList.add('vailidsolution');
    } else {
        onlyworddigitspecialsym.classList.remove('vailidsolution');
        onlyworddigitspecialsym.classList.add('vailidNOsolution');
    }
});

inputlogin.addEventListener("change", function () {
    let regex = /[A-Za-zА-Яа-я0-9\-@.+_]{5,150}/.test(this.value);

    if (regex) {
        inputObject['login'] = this.value;
    } 
});

inputemail.addEventListener("change", function () {
    inputObject['email'] = this.value;
});

inputpass.addEventListener("input", function () {
    let reg = /^\d+$/.test(this.value);
    let onlydigit = document.querySelector('#onlydigit');

    if (!reg) {
        onlydigit.classList.add('vailidsolution');
        onlydigit.classList.remove('vailidNOsolution');
    } else {
        onlydigit.classList.add('vailidNOsolution');
        onlydigit.classList.remove('vailidsolution');
    }

   
    let mineightsym = document.querySelector('#mineightsym');
    if (this.value.length >= 8) {
        mineightsym.classList.add('vailidsolution');
        mineightsym.classList.remove('vailidNOsolution');
    } else {
        mineightsym.classList.add('vailidNOsolution');
        mineightsym.classList.remove('vailidsolution');
    }

    let notmatchlogin = document.querySelector('#notmatchlogin');

    if (this.value == inputlogin.value) {
        notmatchlogin.classList.add('vailidNOsolution');
        notmatchlogin.classList.remove('vailidsolution');
    } else {
        notmatchlogin.classList.add('vailidsolution');
        notmatchlogin.classList.remove('vailidNOsolution');
    }
});

inputpass.addEventListener("change", function () {
    let regex =  /^\d+$/.test(this.value);

    if (!regex && this.value.length >= 8) {
        inputObject['pass'] = this.value;

        localStorage.setItem("inputObject", JSON.stringify(inputObject));
    }
});

confirmpass.addEventListener('input', function() {
    let equalspasswords = document.querySelector('#equalspasswords');


    if (this.value === inputpass.value) {
        equalspasswords.classList.add('vailidsolution');
        equalspasswords.classList.remove('vailidNOsolution');
    } else {
        equalspasswords.classList.add('vailidNOsolution');
        equalspasswords.classList.remove('vailidsolution');
    }
});

this.onload = function() {
    let getdatafromstorage = JSON.parse(localStorage.getItem("inputObject"));

    if (getdatafromstorage) {
        inputname.value = getdatafromstorage.name;
        inputfamilia.value = getdatafromstorage.familia;
        inputlogin.value = getdatafromstorage.login;
        inputemail.value = getdatafromstorage.email;
        inputpass.value = getdatafromstorage.pass;
    }
}