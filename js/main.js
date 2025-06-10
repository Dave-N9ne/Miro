function addNavMenu () {
    const button = document.querySelector('#header-burger');
    const nav = document.querySelector('#header-nav-list');
    const body = document.body;
    
    button.addEventListener ('click', function (event) {
        const elementsToActive = [button, nav];
        elementsToActive.forEach(toggleActiveClass);
        body.classList.toggle('lock');
    })
}

function toggleActiveClass (element) {
    element.classList.toggle('active');
}

addNavMenu ();

function addPopupWindow() {
    const button = document.querySelector('#header-popup-button');
    const popupOverlay = document.querySelector('#popup-overlay');
    button.addEventListener('click', function(event) {
        addActiveClass(popupOverlay);
    })
    popupOverlay.addEventListener('click', function(event) {
        if (event.target === popupOverlay) {
            removeActiveClass(popupOverlay);
        }
    })
}

addPopupWindow();

function TabElements (buttons, contentList) {
    this.buttons = buttons;
    this.contentList = contentList;
    this.addTabs = function () {
        this.buttons.forEach(function (button, index) {
            button.addEventListener("click", function (event) {
                switchTabs (
                    button,
                    index,
                    buttons,
                    contentList
                );
            });
        });
    }
}

function switchTabs (
            button,
            index,
            buttons,
            contentList,
        ) {
    const arrayOfTabLists = [
        contentList,
        buttons
    ];
    arrayOfTabLists.forEach(function (array) {
        array.forEach(removeActiveClass);
    });
    
    const content = contentList[index];
    const arrayOfTabElements = [
        content,
        button
    ];
    arrayOfTabElements.forEach(addActiveClass);
}

function removeActiveClass (element) {
    element.classList.remove('active');
}

function addActiveClass (element) {
    element.classList.add('active');
}

function linkTabs () {
    const workstyleButtons = document.querySelectorAll('.workstyle__button');
    const workstyleContentList = document.querySelectorAll('.workstyle__content');
    const commandsButtons = document.querySelectorAll('.commands__button');
    const commandsContentList = document.querySelectorAll('.commands__content');

    const workstyleTabs = new TabElements (
        workstyleButtons, workstyleContentList
    );
    const commandsTabs = new TabElements (
        commandsButtons, commandsContentList
    );
    const arrayOfTabs = [
        workstyleTabs,
        commandsTabs
    ]
    arrayOfTabs.forEach(function (object) {
        object.addTabs();
    })
}

linkTabs ();