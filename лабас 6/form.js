//login initialization
let login = document.querySelector('#login');
let lv1_ico = document.querySelector('#login__validation__1__ico')
let lv1_text = document.querySelector('#login__validation__1__text')
let lv2_ico = document.querySelector('#login__validation__2__ico')
let lv2_text = document.querySelector('#login__validation__2__text')

//password initialization
let password = document.querySelector('#password');
let pv1_ico = document.querySelector('#password__validation__1__ico')
let pv1_text = document.querySelector('#password__validation__1__text')
let pv2_ico = document.querySelector('#password__validation__2__ico')
let pv2_text = document.querySelector('#password__validation__2__text')
let pv3_ico = document.querySelector('#password__validation__3__ico')
let pv3_text = document.querySelector('#password__validation__3__text')
let pv4_ico = document.querySelector('#password__validation__4__ico')
let pv4_text = document.querySelector('#password__validation__4__text')

//for repeating of password
let repeat_passwd = document.querySelector("#repeat__password");
let rp_ico = document.querySelector('#repeat__password__ico')
let rp_text = document.querySelector('#repeat__password__text')

//register initialization
let register_btn = document.querySelector("#register");

//personal data agreement initialization
let personal_data = document.querySelector("#personal__data__agreement");

//personal data agreement listener
const buttonState = checkBox => {
    register_btn.disabled = !checkBox.checked;
};

personal_data.addEventListener('change', function () {
    buttonState(this)
});

document.addEventListener("change", buttonState(personal_data));

//login listener
login.addEventListener('input', function () {
    let regularExpression = /^[а-яА-Яa-zA-Z0-9\-@.+_]+$/.test(this.value);

    if (regularExpression) {
        lv1_text.className = 'validated'
        lv1_ico.className = 'validated__img'
    }

    if (!regularExpression) {
        lv1_text.className = 'not__validated'
        lv1_ico.className = 'not__validated__img'
        register_btn.disabled = true
        personal_data.checked = false
    }

    if (this.value.length >= 5) {
        lv2_text.className = 'validated'
        lv2_ico.className = 'validated__img'
    }

    if (this.value.length < 5) {
        lv2_text.className = 'not__validated'
        lv2_ico.className = 'not__validated__img'
        register_btn.disabled = true
        personal_data.checked = false
    }
});

//password listener
password.addEventListener('input', function () {
    let regularExpression = /^\d+$/.test(this.value);

    if (this.value.length >= 8) {
        pv1_ico.className = 'validated__img'
        pv1_text.className = 'validated'
    }
    if (this.value.length < 8) {
        pv1_ico.className = 'not__validated__img'
        pv1_text.className = 'not__validated'
        register_btn.disabled = true
        personal_data.checked = false
    }

    if (!regularExpression) {
        pv2_ico.className = 'validated__img'
        pv2_text.className = 'validated'
    }
    if (regularExpression) {
        pv2_ico.className = 'not__validated__img'
        pv2_text.className = 'not__validated'
        register_btn.disabled = true
        personal_data.checked = false
    }

    if (this.value !== '') {
        if (this.value !== login.value) {
            pv3_ico.className = 'validated__img'
            pv3_text.className = 'validated'
        } else {
            pv3_ico.className = 'not__validated__img'
            pv3_text.className = 'not__validated'
            register_btn.disabled = true
            personal_data.checked = false
        }
    }

    if (this.value !== "123") {
        pv4_ico.className = 'validated__img'
        pv4_text.className = 'validated'
    } else {
        pv4_ico.className = 'not__validated__img'
        pv4_text.className = 'not__validated'
        register_btn.disabled = true
        personal_data.checked = false
    }
});

//repeating for password listener
repeat_passwd.addEventListener('input', function () {
    if (this.value !== '' && password.value !== '') {
        if (this.value === password.value) {
            rp_ico.className = 'validated__img'
            rp_text.className = 'validated'
        } else {
            rp_ico.className = 'not__validated__img'
            rp_text.className = 'not__validated'
            register_btn.disabled = true
            personal_data.checked = false
        }
    }
});