let app = new Vue({
    el: "#app",
    data: {
        author: '',
        author_name: 'none',
        author_login: 'none',
        subscribers: '0',
        signed: '0',
        post_count: '0',
        posts: data
    },
    computed:{
        filteredList: function(){
            let author = this.author;

            return this.posts.filter( el => {
                if(author === '') {
                    this.author_name = '';
                    this.author_login = 'none';
                    this.subscribers = 0;
                    this.signed = 0;
                    this.post_count = data.length;

                    return true;
                }
                else {

                    if (el.author === author) {

                        
                        fortheglory.forEach(it => {

                            if (it.login === el.author) {
                                this.author_name = it.name;
                                this.author_login = it.login;
                                this.subscribers = it.subscribers;
                                this.signed = it.signed;
                                this.post_count = it.post_count;
                            }

                        });
                    }

                    return el.author === author;
                }
            })
        }
    }
});