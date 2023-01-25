let app = new Vue({
    el: "#vueId",
    data: {
        choiced__author: 'Все публикации',
        author_name: '',
        author_nickname: '',
        subscribers: '',
        subscribed: '',
        amount_of_posts: '',
        posts: data
    },
    computed:{
        filterPosts: function(){
            let author = this.choiced__author;
            return this.posts.filter( e => {
                if(author === '' || author === 'Все публикации') {
                    this.author_name = 'Все публикации';
                    this.author_nickname = '';
                    this.subscribers = -1;
                    this.subscribed = -1;
                    this.amount_of_posts = -1;

                    return true;
                }
                else {
//Условие изменения данных на странице при выборе автора
                    if (e.author === author) {
                        //парсинг полей
                    authors_list.forEach(it => {
                        if (it.nickname === e.author) {
                            this.author_name = it.name;
                            this.author_nickname = it.nickname;
                            this.subscribers = it.subscribers;
                            this.subscribed = it.subscribed;
                            this.amount_of_posts = it.amount_of_posts;
                        }
                    });
                }
                    return e.author === author;
                }
            })
        }
    }
});