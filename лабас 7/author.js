let authors_list = [
    {
        'name': 'Даня',
        'nickname': '@Danya',
        'subscribers': '159',
        'subscribed': '16',
        'amount_of_posts': '4'
    },
    {
        'name': 'Тёма',
        'nickname': '@Artyom',
        'subscribers': '985848',
        'subscribed': '65',
        'amount_of_posts': '163'
    }
];

let list = document.querySelector('#listOfAuthors');

authors_list.forEach(e => {
    const author = document.createElement('option');
    author.value = e.nickname;
    author.innerHTML = e.name;

    list.appendChild(author);
});