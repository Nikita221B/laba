let list_authors = [
    {
        'name': 'Юзьеров Константин Агапович',
        'login': '@OtherUserAccountName',
        'subscribers': '5',
        'signed': '4',
        'post_count': '108'
    },
    {
        'name': 'Васильев Никита Васильевич',
        'login': '@NikitaVasilyev',
        'subscribers': '13',
        'signed': '13',
        'post_count': '50'
    }

];

// автоматически заполняем select на странице post_add.html по авторам 
// из массива list_authors
const CreateOptions = () => {
    let select = document.querySelector('#select_authors');

    list_authors.forEach(it => {
        let opt = document.createElement('option');
        opt.value = it.login;
        opt.innerHTML = it.name;

        select.appendChild(opt);
    });
};

CreateOptions();