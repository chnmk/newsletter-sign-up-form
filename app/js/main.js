//https://www.w3resource.com/javascript/form/email-validation.php
const emailValidationRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

const delay = ms => new Promise(res => setTimeout(res, ms));

async function submitEmail() {
    const inputText = document.getElementsByClassName("email-input__input-field")[0].value
    if (emailValidationRegex.test(inputText)) {
        const mainPage = document.getElementsByClassName("main-page")[0]
        const popupWindow = document.getElementsByClassName("pop-up")[0]
        const errorMessage = document.getElementsByClassName("email-input__error")[0]
        const inputField = document.getElementsByClassName("email-input__input-field")[0]
        mainPage.classList.add("main-page--invisible");
        await delay(150);
        mainPage.classList.add("main-page--disabled");
        popupWindow.classList.remove("pop-up--disabled")
        popupWindow.classList.remove("pop-up--invisible");
        errorMessage.classList.add("email-input__error--disabled")
        inputField.classList.remove("email-input__input-field--error")
        document.getElementsByClassName("pop-up__email-display")[0].innerHTML = inputText
    } else if (inputText == "") {
        const errorMessage = document.getElementsByClassName("email-input__error")[0]
        const inputField = document.getElementsByClassName("email-input__input-field")[0]
        document.getElementsByClassName("email-input__error")[0].innerHTML = "Email required"
        errorMessage.classList.remove("email-input__error--disabled")
        inputField.classList.add("email-input__input-field--error")
    } else {
        const errorMessage = document.getElementsByClassName("email-input__error")[0]
        const inputField = document.getElementsByClassName("email-input__input-field")[0]
        document.getElementsByClassName("email-input__error")[0].innerHTML = "Valid email required"
        errorMessage.classList.remove("email-input__error--disabled")
        inputField.classList.add("email-input__input-field--error")
    }
} 

async function closePopup() {
    const mainPage = document.getElementsByClassName("main-page")[0]
    const popupWindow = document.getElementsByClassName("pop-up")[0]
    popupWindow.classList.add("pop-up--invisible")
    await delay(150);
    popupWindow.classList.add("pop-up--disabled")
    mainPage.classList.remove("main-page--disabled");
    mainPage.classList.remove("main-page--invisible");
} 