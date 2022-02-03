const nameInputRef = document.querySelector('#name-input');
const nameOutputRef = document.querySelector('#name-output');

// Вариант 1
// nameInputRef.addEventListener('input', enterText);

// function enterText(event) {
//     const value = event.target.value.trim();
//     if (!value) {
//         nameOutputRef.textContent = 'Anonymous';
//     } else {
//         nameOutputRef.textContent = value;
//     }
// }

// Вариант 2 через стрелочную функцию

nameInputRef.addEventListener('input', () => {
    const InputValue = nameInputRef.value.trim();
    nameOutputRef.textContent = InputValue || 'Anonymous';
});




// Напиши скрипт который, при наборе текста 
// в инпуте input#name-input (событие input), 
// подставляет его текущее значение в span#name-output. 
// Если инпут пустой, в спане должна отображаться
// строка "Anonymous".

// <input type="text" id="name-input"
// placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">
//     Anonymous</span>!</h1>