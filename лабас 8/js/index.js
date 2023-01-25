import OepnModalEnter from "./modules/ModalEnter.js";

let headingsBtn = document.querySelectorAll(".headings_btn");
let btnShowAllPublication = document.querySelector("#show_all_publication");

// Показать все публикации
btnShowAllPublication.addEventListener("click", () => {
    let mainItems = document.querySelectorAll(".main_item");

    mainItems.forEach(it => {

        if (it.classList.contains('hide') || it.classList.contains('show')) {
            it.classList.remove('hide');
            it.classList.remove('show');
        }

    })
});

// Фильтр постов
const FilterMainItems = categorie => {
    let mainItems = document.querySelectorAll(".main_item[data-categories]");

    mainItems.forEach(item => {
        let categoriesItem = item.dataset.categories.split(', ');

        let result = categoriesItem.find(it => {
            return categorie === it;
        });

        if (item.classList.contains("block")) {
            item.classList.remove("block")
        } else {
            item.classList.remove("hide")
        }

        item.classList.add(result ? "block" : "hide");
    });
};

headingsBtn.forEach(it => {
    it.addEventListener("click", () => { FilterMainItems(it.dataset.categories) });
});


// Burger menu

let main = document.querySelector('.main');
let menuBtn = document.querySelector('.menu-btn');
let nav = document.querySelector('.nav');
let mainNavigation = document.querySelector('.main_navigation');
let burgerBlocks = document.querySelector('.burger_blocks');
let mainTitle = document.querySelector('.main_title');
let mainNavigationTitle = document.querySelector('.main_navigation_title');

menuBtn.addEventListener('click', () => {
    let heightHeader = document.querySelector('header').clientHeight;

    let heightWindow = document.documentElement.clientHeight;
    burgerBlocks.style.height = heightWindow - heightHeader + 'px';

    burgerBlocks.appendChild(nav);
    burgerBlocks.appendChild(mainNavigation);

    burgerBlocks.classList.toggle('show_block');

    main.classList.toggle('m_top_60px');
    menuBtn.classList.toggle('active');
    mainTitle.classList.toggle('zero_marginTop');
    nav.classList.toggle('show_nav');
    mainNavigation.classList.toggle('show_block');
    mainNavigationTitle.classList.toggle('burger_title_cl');
});

OepnModalEnter();