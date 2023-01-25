let inptAddImg = document.querySelector('#add_post_img');
let labelAddImg = document.querySelector('#label_add_post_img');
let fileSize = document.querySelector('#file_size');
let fileName = document.querySelector('.form_label-button-text');


inptAddImg.addEventListener('change', () => {

  let preview = document.querySelector('#img_add_file');
  let file = document.querySelector('#add_post_img').files[0];
  let reader = new FileReader();

  reader.onload = function () {
    preview.src = reader.result;
    preview.classList.remove('hide');
  }

  if (file) {

    reader.readAsDataURL(file);
    fileSize.textContent = formatBytes(file.size);

    fileName.textContent = file.name;

    fileName.classList.toggle('color_green');
    fileSize.classList.toggle('color_green');
    labelAddImg.classList.toggle('border_green');

  } else {

    preview.src = "";
    preview.classList.toggle('hide');

    fileName.classList.toggle('color_green');
    fileSize.classList.toggle('color_green');
    labelAddImg.classList.toggle('border_green');

    fileSize.textContent = '';
    fileName.textContent = 'Прикрепить файл изображения';

  }

});


// переводит размер получаемого файла в мб
const formatBytes = (bytes, decimals = 2) => {
  if (!+bytes) return '0 Bytes'

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`
};