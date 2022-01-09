var expression = "";

function catchValue(value) {
    expression += value;
    responseBox.innerHTML = expression;
}

keysBox.querySelector(".reset-button").addEventListener("click", () => {
    responseBox.innerHTML = "";
    expression = "";
});

keysBox.querySelector(".delete-button").addEventListener("click", () => {
    const expressionArray = Array.from(expression);
    expressionArray.pop();
    expression = expressionArray.join('');
    responseBox.innerHTML = expression;
});

keysBox.querySelector(".response-button").addEventListener("click", () => {
    responseBox.innerHTML = eval(expression);
    expression = "";
});