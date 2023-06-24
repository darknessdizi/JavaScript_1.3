const dropValue = document.querySelectorAll('.dropdown__value'),
    dropLink = document.querySelectorAll('.dropdown__link'),
    dropList = document.querySelectorAll('.dropdown__list');

dropValue.forEach((element) => {
    element.addEventListener('click', () => hideMenu(element));
});

dropLink.forEach((element) => {
    element.addEventListener('click', function(event) {
        replaceDropValue(element);
        event.preventDefault();    
    });
});

function replaceDropValue(element) {
    const parent = element.closest('.card');
    const value = parent.querySelector('.dropdown__value');
    const list = parent.querySelector('.dropdown__list');
    list.className = 'dropdown__list';
    value.textContent = element.textContent;  
};

function hideMenu(element) {
    dropList.forEach((value) => {
        if (value.className.includes('active')) {
            value.className = 'dropdown__list';
        };
    });
    const parent = element.closest('.card');
    const list = parent.querySelector('.dropdown__list');
    list.className = 'dropdown__list dropdown__list_active';
};