function addNavMenu () {
    const button = document.querySelector('#header-burger');
    const nav = document.querySelector('#header-nav-list');
    const body = document.body;
    
    button.addEventListener ('click', function (event) {
        const elementsToActive = [button, nav];
        elementsToActive.forEach(toggleActiveClass);
        body.classList.toggle('_lock');
    })
}

function toggleActiveClass (element) {
    element.classList.toggle('_active');
}

addNavMenu();

function TabElements(buttons, contentList) {
    this.buttons = buttons;
    this.contentList = contentList;
    this.addTabs = function() {
        this.buttons.forEach(function(button, index) {
            button.addEventListener("click", function(event) {
                const doesContain = event.target
                                    .classList.contains('tabs__button');
                const arrayOfTabLists = [
                    contentList,
                    buttons
                ];
                if (doesContain) {
                  arrayOfTabLists.forEach(removeInnerElements);
                }
                const content = contentList[index];
                const arrayOfTabElements = [
                    content,
                    button
                ];
                arrayOfTabElements.forEach(addActiveClass);
              });
        })
    }
}

function removeInnerElements (array) {
    array.forEach(removeActiveClass);
}

function removeActiveClass(element) {
    element.classList.remove('active');
}

function addActiveClass(element) {
    element.classList.add('active');
}

function linkTabs() {
    const workstyleButtons = document.querySelectorAll('.workstyle__button');
    const workstyleContentList = document.querySelectorAll('.workstyle__content');
    const commandsButtons = document.querySelectorAll('.commands__button');
    const commandsContentList = document.querySelectorAll('.commands__content');

    const workstyleTabs = new TabElements(workstyleButtons, workstyleContentList);
    const commandsTabs = new TabElements(commandsButtons, commandsContentList);
    const arrayOfTabs = [
        workstyleTabs,
        commandsTabs
    ]
    arrayOfTabs.forEach(function (object) {
        object.addTabs();
    })
}

linkTabs();