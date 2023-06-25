const tab = document.querySelectorAll('.tab');
const content = document.querySelectorAll('.tab__content');

tab.forEach((element, key) => {
    element.addEventListener('click', () => {
        const parent = element.closest('.tabs');
        const childTab = parent.querySelectorAll('.tab');
        const textContent = parent.querySelectorAll('.tab__content');
        childTab.forEach((value, index) => {
            value.className = "tab";
            textContent[index].className = 'tab__content';
        })
        element.className = "tab tab_active";
        content[key].className = 'tab__content tab__content_active';
    })
})
