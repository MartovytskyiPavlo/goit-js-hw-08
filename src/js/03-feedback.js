const STORAGE_KEY = "feedback-form-state";

const storageObject = {};

const form = document.querySelector(".feedback-form");

onReloadPage();

form.addEventListener('input', onTextareaInput);
form.addEventListener('submit', onFormSubmit);

function onTextareaInput(evt) {
    const message = evt.target.value;

    storageObject[evt.target.name] = evt.target.value;

    localStorage.setItem(STORAGE_KEY, JSON.stringify(storageObject));
}

function onReloadPage() {
    const storage = localStorage.getItem(STORAGE_KEY);

    if (storage) {
        const obj = JSON.parse(storage);

        for (let member in obj) {
            form[member].value = obj[member];
        }
    }
}

function onFormSubmit(evt) {
    evt.preventDefault();

    console.log(storageObject);

    for (let member in storageObject) {
        delete storageObject[member];
        form[member].value = "";
    }
}