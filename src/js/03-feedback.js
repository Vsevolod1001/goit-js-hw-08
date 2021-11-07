import throttle from 'lodash.throttle';

const feedbackform = document.querySelector('.feedback-form');

const saveData = {};
const FORM_DATA = 'feedback-form-state';

feedbackform.addEventListener('input', throttle(onTextareaInput, 500));
feedbackform.addEventListener('submit', clearForm);
initForm ();

function onTextareaInput (e) {
    if (e.target.name === "email") {
        saveData.email = e.target.value;
    }
    if (e.target.name === "message") {
        saveData.message = e.target.value;
    }

    localStorage.setItem(FORM_DATA, JSON.stringify(saveData));
}


function clearForm (e) {
    e.preventDefault();
    localStorage.removeItem(FORM_DATA);
    const dataSave = {email: `${feedbackform.email.value}`, message: `${feedbackform.message.value}`};
    console.log(dataSave);
    // console.log('email: ', feedbackform.email.value);
    // console.log('message: ', feedbackform.message.value);
    e.currentTarget.reset();
    saveData.email = '';
    saveData.message = '';
    
    
}

function initForm () {
    if (localStorage.getItem(FORM_DATA)) {
        const initData = JSON.parse(localStorage.getItem(FORM_DATA));
        if (initData.email !== undefined) {
            feedbackform.email.value = initData.email;
        }
        if (initData.message !== undefined) {
            feedbackform.message.value = initData.message;
        }
    }
    }



















// import throttle from 'lodash.throttle'

// const formData = {};

// const refs = {
//     form: document.querySelector('.feedback-form'),
//     textarea: document.querySelector('.feedback-form textarea'),
//     input: document.querySelector('.feedback-form input'),
// };
// refs.form.addEventListener('submit', onFormSubmit);
// refs.textarea.addEventListener('input', throttle(onTextareaInput, 500));
// refs.input.addEventListener('input', );
// refs.form.addEventListener('input', e => {
//     // console.log(e.target.name);
//     // console.log(e.target.value);
//     formData[e.target.name] = e.target.value;
//     console.log(formData);
// });

// populateTextarea();

// function onFormSubmit(e) {
//     e.preventDefault();
//     console.log('отправка');
//     e.currentTarget.reset();
//     localStorage.removeItem('feedback-form-state');
// }

// function onTextareaInput(e) {
//     const message = e.target.value;
//     localStorage.setItem('feedback-form-state', message);
// }

// function populateTextarea() {
//     const savedMessage = localStorage.getItem('feedback-form-state');
//     if (savedMessage) {
//         console.log(savedMessage);
//         refs.textarea.value = savedMessage;
//     }
// }



















// var throttle = require('lodash.throttle');

// const feedbackForm = document.querySelector('.feedback-form');
// localStorageKey = "feedback-form-state";
// const saveOject = {};

// feedbackForm.addEventListener('input', onTextareaInput);
// feedbackForm.addEventListener('submit', (event) => {
//     event.preventDefault();


// function onTextareaInput(event) {
//     const message = event.currentTarget.value;
//     localStorage.setItem('feedback-form-state', message);
// }




// })


