const elsTabsItem = document.querySelectorAll('.tabs__item');
const elsTabsPanels = document.querySelectorAll('.tabs__panel');

const elsTabLink = document.querySelectorAll('.js-tab-link');

function deactiveTabItem() {
    elsTabsItem.forEach(function (elTabsItem) {
        elTabsItem.classList.remove('tabs__item--active');
    })
}

function deactiveteTabPanels(){
    elsTabsPanels.forEach(function (elTabsPanel) {
        elTabsPanel.classList.remove('tabs__panel--active');
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
        elTargetPanel.classList.add("tabs__panel--active");

    });
});