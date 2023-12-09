function submitEmail() {
    if (true) {
        const mainPage = document.getElementsByClassName("main-page")[0]
        const popupWindow = document.getElementsByClassName("pop-up")[0]
        mainPage.classList.add("main-page--disabled");
        popupWindow.classList.remove("pop-up--disabled")
    }
} 

function closePopup() {
    if (true) {
        const mainPage = document.getElementsByClassName("main-page")[0]
        const popupWindow = document.getElementsByClassName("pop-up")[0]
        popupWindow.classList.add("pop-up--disabled")
        mainPage.classList.remove("main-page--disabled");
    }
} 