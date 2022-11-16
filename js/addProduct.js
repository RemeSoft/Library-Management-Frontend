let radioButtons = document.querySelectorAll(".picker__radio");
const colorsContainer = document.querySelector("#colors__container");
const colorCodeInput = document.querySelector("#color__code");
const bookPreview = document.querySelector("#card__preview")

let colorValue;
colorsContainer.addEventListener('click', () => {
    for (const radioButton of radioButtons) {
        if (radioButton.checked) {
            colorValue = radioButton.value;
            break;
        }
    }
    console.log(colorValue);
    colorCodeInput.value = colorValue;
    bookPreview.style.backgroundColor = colorValue;
})