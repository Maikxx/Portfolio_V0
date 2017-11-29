function dropDownFunction(id) {
    document.getElementById(id).classList.toggle('show');
}

window.addEventListener("click", removeShowClass);
window.addEventListener("scroll", scrollOverThis);

function removeShowClass(event) {
    if (!event.target.matches('div, label, input, textarea, #drop-down-button, #mail-form')) {
        let dropDowns = document.querySelectorAll('.drop-down-content');
        for (let i = 0; i < dropDowns.length; i++) {
            let openDropDown = dropDowns[i];
            if (openDropDown.classList.contains('show')) {
                openDropDown.classList.remove('show');
            }
        }
    }
}

function scrollOverThis() {
    for (let item of document.querySelectorAll('.introduction li, .skills, .skills-wrapper')) {
        elementVisible(item);
    }
}

function elementVisible(el) {
    let top = el.offsetTop;
    let height = el.offsetHeight;
    let bottom = top + height;

    let IsOverBottom = top > (window.pageYOffset + window.innerHeight);
    let IsBeforeTop = bottom < window.pageYOffset;

    if (!IsOverBottom && !IsBeforeTop) {
        el.classList.add('show-animation');
    }
}