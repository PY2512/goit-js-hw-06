const ingredients = [
    'Potatoes',
    'Mushrooms',
    'Garlic',
    'Tomatos',
    'Herbs',
    'Condiments',
];


const itemList = document.querySelector('#ingredients')

const list = (item) => {
    const element = document.createElement(`li`);
    element.textContent = item;
    return element;
};

const createList = ingredients.map(list);
itemList.append(...createList);
// console.log(createList);

// Напиши скрипт, который для каждого 
// элемента массива ingredients:

// Создаст отдельный элемент <li>. 
// Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию 
// в список ul.ingredients.