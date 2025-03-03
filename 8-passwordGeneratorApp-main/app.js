// 1. Seleccionar elementos del DOM
const charLength = document.querySelector("#charLength");
const lengthRange = document.querySelector("#lengthRange");
const passwordOutput = document.querySelector("#passwordOutput");
const generateButton = document.querySelector("#generateButton");
const copyButton = document.querySelector("#copyButton");

// 2. Arrays de caracteres
const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", "{", "}", "[", "]", "|", "\\", ":", ";", "'", '"', "<", ">", ",", ".", "?", "/"];

// 3. Objeto "utils" para funciones de utilidad
const utils = {
    generateRandomBetween: function (min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    },
    getCharsFromArray: function (array, num) {
        let chars = "";
        for (let i = 0; i < num; i++) {
            const randNumber = utils.generateRandomBetween(0, array.length - 1);
            if (typeof array[randNumber] === "string") {
                randNumber % 2 === 0 ? chars += array[randNumber].toLowerCase() : chars += array[randNumber].toUpperCase();
            } else {
                chars += array[randNumber];
            }
        }
        return chars;
    }
};

// 4. Función para generar la contraseña
function generatePassword() {
    const passLength = parseInt(lengthRange.value);
    const includeNumbers = document.querySelector("#numbers").checked;
    const includeSymbols = document.querySelector("#symbols").checked;

    let tempPassword = "";

    // Calcular la cantidad máxima de números y símbolos que se pueden agregar
    let maxNumbers = 0;
    let maxSymbols = 0;

    if (includeNumbers) {
        maxNumbers = utils.generateRandomBetween(1, Math.min(3, passLength));
    }
    if (includeSymbols) {
        maxSymbols = utils.generateRandomBetween(1, Math.min(3, passLength - maxNumbers));
    }

    // Asegurarse de que la suma de números y símbolos no exceda passLength
    if (maxNumbers + maxSymbols > passLength) {
        maxNumbers = Math.min(maxNumbers, passLength);
        maxSymbols = Math.min(maxSymbols, passLength - maxNumbers);
    }

    // Agregar números y símbolos
    if (includeNumbers) {
        tempPassword += utils.getCharsFromArray(numbers, maxNumbers);
    }
    if (includeSymbols) {
        tempPassword += utils.getCharsFromArray(symbols, maxSymbols);
    }

    // Añadir letras para completar la longitud
    const remainingLength = passLength - tempPassword.length;
    tempPassword += utils.getCharsFromArray(letters, remainingLength);

    // Mezclar la contraseña para mayor aleatoriedad
    const shuffledPassword = tempPassword.split("").sort(() => Math.random() - 0.5).join("");

    // Mostrar la contraseña generada
    passwordOutput.value = shuffledPassword;
}

// 5. Event listeners
lengthRange.addEventListener("change", function (e) {
    charLength.textContent = e.currentTarget.value;
});

generateButton.addEventListener("click", generatePassword);

copyButton.addEventListener("click", function () {
    if (passwordOutput.value === "") return;
    navigator.clipboard.writeText(passwordOutput.value);
});
