let input = document.querySelector('#input__image');
let div = document.querySelector('#progressbar__div');
let progressbar = document.querySelector('#progressbar');
let XMLHR = new XMLHttpRequest();
let file__size = document.querySelector('#size');
let label = document.querySelector('#label__attach');
let attach_svg = document.querySelector('#attach_svg');
let preview__image = document.querySelector('#image');

function humanFileSize(bytes, si = false, dp = 1) {
    const trash = si ? 1000 : 1024;

    if (Math.abs(bytes) < trash) {
        return bytes + ' B';
    }

    const units = si
        ? ['kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
        : ['KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB'];
    let u = -1;
    const r = 10 ** dp;

    do {
        bytes /= trash;
        ++u;
    } while (Math.round(Math.abs(bytes) * r) / r >= trash && u < units.length - 1);

    return bytes.toFixed(dp) + ' ' + units[u];
}

// async function sendRequest(file, size) {
//     // code below here will only execute when await makeRequest() finished loading
//     let result = await XMLHR.open("POST", "https://isidea.ru/rgups_file.php", true);
//     XMLHR.upload.onprogress = function (progress) {
//         progressbar.value = progress.loaded;
//     }
//     progressbar.setAttribute("max", size);
//     label.className = 'attach__image__completed';
//     file__size.textContent = "[" + Math.round(size/1024) + humanFileSize(size) + "]";
//     XMLHR.send(file);
//     progressbar.className = 'hide';
// }

input.onchange = evt => {
    div.className = 'progressbar__div'
    const [file] = input.files
    if (file) {
        image.className = 'img';
        image.src = URL.createObjectURL(file);
        XMLHR.open("POST", "https://isidea.ru/rgups_file.php", true);
        XMLHR.upload.onprogress = function (progress) {
            progressbar.value = progress.loaded;
        }
        progressbar.setAttribute("max", file.size);
        file__size.textContent = "[" + Math.round(file.size / 1024) + humanFileSize(file.size) + "]";
        XMLHR.send(file);

        //небольшая искусственная задержка, чтоб сразу не пропадал, ибо файлы маленькие. Быстро грузит
        setTimeout(function(){
            progressbar.className = 'hide';
            attach_svg.setAttribute('fill', '#05fa1e');
            label.className = 'attach__image__completed';
        }, 1000);

    }
}