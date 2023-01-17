let myInput = document.querySelector('#file');
let fileSize = document.querySelector('#file_weight');
let fileName = document.querySelector('#text_for_load');
let popug = document.querySelector('.popug');
let text_for_load = document.querySelector('#text_for_load');
let file_weight = document.querySelector('#file_weight');

let completeBar = document.querySelector('#completeBar');

let xhr = new XMLHttpRequest();

myInput.addEventListener('change', function() {

    let privieFile = document.querySelector('#imgLoad');
    let file = document.querySelector('#file').files[0];
    let reader = new FileReader();

    reader.onload = function() {
        privieFile.src = reader.result;
    }

    xhr.open('POST', 'https://isidea.ru/rgups_file.php', true);

    completeBar.setAttribute('max', file.size);
    xhr.upload.onprogress = e => {
        completeBar.value = e.loaded;
    }

    xhr.upload.onload = function() {
        reader.readAsDataURL(file);

        fileSize.textContent = formatBytes(file.size);
        fileName.textContent = file.name;

        popug.classList.add("gotoviuploadborder");
        text_for_load.classList.add("gotoviuploadp");
        file_weight.classList.add("gotoviuploadp");
        privieFile.classList.remove("hide");
    }

    xhr.send(file);

});


// переводит размер получаемого файла в нужный нам формат
const formatBytes = (bytes, decimals = 2) => {
    if (!+bytes) return '0 Bytes'

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`
};