function addActiveClass (element) {
  element.classList.add('active');
}

function removeActiveClass (element) {
  element.classList.remove('active');
}

function toggleActiveClass (element) {
  element.classList.toggle('active');
}

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

class Tabs {
  constructor(buttons, contentList) {
    this.buttons = buttons;
    this.contentList = contentList;
  }
  addTabs() {
    this.buttons.forEach((button, index) => {
      button.addEventListener("click", () => {
        switchTabs (
          button,
          index,
          this.buttons,
          this.contentList
        );
      });
    });
  }
}

function switchTabs (
  button,
  index,
  buttons,
  contentList
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

function linkTabs () {
  const workstyleButtons = document.querySelectorAll('.workstyle__button');
  const workstyleContentList = document.querySelectorAll('.workstyle__content');
  const commandsButtons = document.querySelectorAll('.commands__button');
  const commandsContentList = document.querySelectorAll('.commands__content');
  
  const workstyleTabs = new Tabs (
    workstyleButtons, 
    workstyleContentList
  );
  const commandsTabs = new Tabs (
    commandsButtons, 
    commandsContentList
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