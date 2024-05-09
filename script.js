let result, x, y, option;

function addition(num1, num2) {
    result = num1 + num2;
}

function substraction(num1, num2) {
    result = num1 - num2;
}

function multiplication(num1, num2) {
    result = num1 * num2;
}

function division(num1, num2) {
    result = num1 / num2;
}

function btn() {
    x = Number(document.getElementById('num_1').value);
    y = Number(document.getElementById('num_2').value);
    option = document.getElementById('operator').value;
    if (option == "addition") {
        addition(x, y);
    } else if (option == "substraction") {
        substraction(x, y);
    } else if (option == "multiplication") {
        multiplication(x, y);
    } else if (option == "division") {
        division(x, y);
    }
    document.getElementById('result').value = result;
}