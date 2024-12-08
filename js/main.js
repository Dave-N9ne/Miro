function addNavMenu () {
    const button = document.querySelector('#header-burger');
    const nav = document.querySelector('#header-nav');
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
addNavMenu ();