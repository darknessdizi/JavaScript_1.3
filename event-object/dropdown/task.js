const value = document.querySelector('.dropdown__value'),
    dropLink = document.querySelectorAll('.dropdown__link'),
    dropList = document.querySelector('.dropdown__list');

console.log('value', value);
console.log('dropLink', dropLink);
console.log('dropList', dropList);

value.onclick = () => {
    dropList.className = 'dropdown__list dropdown__list_active';
};

dropLink.forEach((element) => {
    element.onclick = () => {
        value.textContent = element.textContent;
        dropList.className = 'dropdown__list';
        return false;
    };
});