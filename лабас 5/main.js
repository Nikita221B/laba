var customLinks = document.querySelectorAll(".button");

function FIlter (categorie) {

    var mainItems = document.querySelectorAll(".item[data-categories]");

    mainItems.forEach(item => {

        var categoriesItem = item.dataset.categories.split(', ');

        var result = categoriesItem.find(it => {
            return categorie === it;
        });

        if (item.classList.contains("block_show"))
            item.classList.remove("block_show")
        else
            item.classList.remove("block_hide")

        item.classList.add(result ? "block_show" : "block_hide");
    })
}

customLinks.forEach(it => {

    it.addEventListener("click", () => { FIlter(it.dataset.categories) });
});