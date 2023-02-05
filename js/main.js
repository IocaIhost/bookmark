const elsTabsItem = document.querySelectorAll('.tabs__item');
const elsTabsPanels = document.querySelectorAll('.tabpanels__item');

const elsTabLink = document.querySelectorAll('.js-tab-link');

function deactiveTabItem() {
    elsTabsItem.forEach(function (elTabsItem) {
        elTabsItem.classList.remove('tabs__item--active');
    })
}

function deactiveteTabPanels(){
    elsTabsPanels.forEach(function (elTabsPanel) {
        elTabsPanel.classList.remove('tabpanels__item--active');
    })
}

elsTabLink.forEach(function (elTabLink){
    elTabLink.addEventListener('click', function(evt){
        // Prevent page move
        evt.preventDefault();

        // Remove active class from tabs__item elements
        deactiveTabItem();

        // Add active class to tabs__item element
        elTabLink.parentElement.classList.add('tabs__item--active');

        // Remove active class from tabs__panels elements
        deactiveteTabPanels();

        // Add active class to tabs__panel
        // const elTargetPanel = document.querySelector(`#${elTabLink.href.split("#")[1]}`);
        const elTargetPanel = document.querySelector(elTabLink.dataset.tabTarget);
        elTargetPanel.classList.add("tabpanels__item--active");
        // console.log(activePanel);;
    });
});


// FAQ - Accordion
const elsAccItem = document.querySelectorAll(".accordion__item");
const elsAccItemToggler = document.querySelectorAll('.accordion__item-toggler');

function closeAccItem(){
    elsAccItem.forEach(function (elAccItem) {
        console.log('salom');
        elAccItem.classList.remove('accordion__item--open');
    })
}

elsAccItemToggler.forEach(function (elAccItemToggler) {
    console.log('ish');
    elAccItemToggler.addEventListener("click", function () {
        closeAccItem();
        elAccItemToggler.parentElement.parentElement.classList.add('accordion__item--open');
    });
});