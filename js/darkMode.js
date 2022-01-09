const themeButton = document.querySelector(".check-circle");

const icon = document.querySelector("ion-icon")
const background = document.querySelector("body");
const title = document.querySelector("p");
const check = document.querySelector(".check");
const responseBox = document.querySelector(".response-box");
const keysBox = document.querySelector(".keys");

themeButton.addEventListener("click", () => {

    const themeButtonState = window.getComputedStyle(themeButton).animationName;
    
    if(themeButtonState == 'none' || themeButtonState == 'slide-to-left') {
        themeButton.style.animation = 'slide-to-right .4s ease forwards';

        icon.style.color = 'var(--Very-dark-grayish-yellow)';
        background.style.backgroundColor = 'var(--Light-gray-main)';
        title.style.color = 'var(--Very-dark-grayish-yellow)';
        check.style.backgroundColor = 'var(--Grayish-red-toogleKeypad)';
        themeButton.style.backgroundColor = 'var(--Orange-keyToogle)';
        responseBox.style.backgroundColor = 'var(--Very-light-gray-screen)';
        responseBox.style.color = 'var(--Very-dark-grayish-yellow)';
        keysBox.style.backgroundColor = 'var(--Grayish-red-toogleKeypad)';

        keysBox.querySelector(".delete-button").style.cssText = 
        'background-color: var(--Dark-moderate-cyan-key);' + 
        'border-bottom: 4px solid var(--Very-dark-cyan-key);';

        keysBox.querySelector(".reset-button").style.cssText = 
        'background-color: var(--Dark-moderate-cyan-key);' + 
        'border-bottom: 4px solid var(--Very-dark-cyan-key);';

        keysBox.querySelector(".response-button").style.cssText = 
        'background-color: var(--Orange-keyToogle);' + 
        'border-bottom: 4px solid var(--Dark-orange-keyShadow);';
    }

    if(themeButtonState == 'slide-to-right') {
        themeButton.style.animation = 'slide-to-left .4s ease forwards';

        icon.style.color = 'white';
        background.style.backgroundColor = 'var(--Very-dark-desaturated-blue-main)';
        title.style.color = 'white';
        check.style.backgroundColor = 'var(--Very-dark-desaturated-blue-toogleKeypad)';
        themeButton.style.backgroundColor = 'var(--Red-keyToogle)';
        responseBox.style.backgroundColor = 'var(--Very-dark-desaturated-blue-screen)';
        responseBox.style.color = 'white';
        keysBox.style.backgroundColor = 'var(--Very-dark-desaturated-blue-toogleKeypad)';

        keysBox.querySelector(".delete-button").style.cssText = 
        'background-color: var(--Desaturated-dark-blue-key);' + 
        'border-bottom: 4px solid var(--Desaturated-dark-blue-keyShadow);';

        keysBox.querySelector(".reset-button").style.cssText = 
        'background-color: var(--Desaturated-dark-blue-key);' + 
        'border-bottom: 4px solid var(--Desaturated-dark-blue-keyShadow);';

        keysBox.querySelector(".response-button").style.cssText = 
        'background-color: var(--Red-keyToogle);' + 
        'border-bottom: 4px solid var(--Dark-red-keyShadow);';
    }
});