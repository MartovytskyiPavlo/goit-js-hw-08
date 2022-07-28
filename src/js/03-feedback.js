import throttle from 'lodash.throttle';

const STORAGE_KEY = "feedback-form-state";

const storageObject = {};

const form = document.querySelector(".feedback-form");

form.addEventListener('input', throttle(onTextareaInput,500));
form.addEventListener('submit', onFormSubmit);

onReloadPage();

function onTextareaInput(evt) {
    storageObject[evt.target.name] = evt.target.value;

    localStorage.setItem(STORAGE_KEY, JSON.stringify(storageObject));
}

function onReloadPage() {
    const storage = localStorage.getItem(STORAGE_KEY);

    if (storage) {
        const obj = JSON.parse(storage);

        for (const name in obj) {
            form[name].value = obj[name];
        }
    }
}

function onFormSubmit(evt) {
    evt.preventDefault();
    evt.currentTarget.reset();

    console.log(storageObject);

    for (const name in storageObject) {
        delete storageObject[name];
    }

    localStorage.removeItem(STORAGE_KEY);
}