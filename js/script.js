const themeButton = document.querySelector(".check-circle");
const themeBox = document.querySelector(".check");

themeButton.addEventListener("click", () => {

    const themeBoxState = window.getComputedStyle(themeBox).justifyContent;
    
    if(themeBoxState == 'flex-start') {
        // themeBox.style.justifyContent = 'center';
        themeBox.style.animation = 'slide-to-center .4s linear forwards';
    }

    if(themeBoxState == 'center') {
        // themeBox.style.justifyContent = 'flex-end';
        themeBox.style.animation = 'slide-to-right .4s linear forwards';
    }

    if(themeBoxState == 'flex-end') {
        // themeBox.style.justifyContent = 'flex-start';
        themeBox.style.animation = 'slide-to-left .4s linear forwards';
    }
});