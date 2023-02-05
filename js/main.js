modifier = {
    tabItemActive : 'tabs__item--active',
    tabPanelItem  : 'tabpanels__item--active',
    accItemOpener : 'accordion__item--open'
}


const elsTabsItem = document.querySelectorAll('.tabs__item');
const elsTabsPanels = document.querySelectorAll('.tabpanels__item');
const elsTabLink = document.querySelectorAll('.js-tab-link');

function deactiveTabItem() {
    elsTabsItem.forEach(function (elTabsItem) {
        elTabsItem.classList.remove(modifier.tabItemActive);
    })
}

function deactiveteTabPanels(){
    elsTabsPanels.forEach(function (elTabsPanel) {
        elTabsPanel.classList.remove(modifier.tabPanelItem);
    })
}

elsTabLink.forEach(function (elTabLink){
    elTabLink.addEventListener('click', function(evt){
        // Prevent page move
        evt.preventDefault();

        // Remove active class from tabs__item elements
        deactiveTabItem();

        // Add active class to tabs__item element
        elTabLink.parentElement.classList.add(modifier.tabItemActive);

        // Remove active class from tabs__panels elements
        deactiveteTabPanels();

        // Add active class to tabs__panel
        // const elTargetPanel = document.querySelector(`#${elTabLink.href.split("#")[1]}`);
        const elTargetPanel = document.querySelector(elTabLink.dataset.tabTarget);
        elTargetPanel.classList.add(modifier.tabPanelItem);
        // console.log(activePanel);;
    });
});


// FAQ - Accordion
const elsAccItem = document.querySelectorAll(".accordion__item");
const elsAccItemToggler = document.querySelectorAll('.accordion__item-toggler');

function closeAccItem(){
    elsAccItem.forEach(function (elAccItem) {
        elAccItem.classList.remove(modifier.accItemOpener);
    })
}

elsAccItemToggler.forEach(function (elAccItemToggler) {
    elAccItemToggler.addEventListener("click", function () {
        closeAccItem();
        elAccItemToggler.parentElement.parentElement.classList.add(modifier.accItemOpener);
    });
});