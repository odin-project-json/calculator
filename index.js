let first_num = '';
let second_num = '';
let calculate = '';
let equals = '=';

const operator = document.querySelectorAll('button');
const convt_operator = Array.from(operator);

convt_operator.forEach(input => {
    input.addEventListener('click', () => {
        const calc = input.textContent.trim();
        
        if(calc == equals) {
            if(first_num == '' || second_num == '' || calculate == '') {
                console.log('empty numbers to calculate');
            } else {
                if(calculate == '+') {
                    add(first_num, second_num);
                } else if(calculate == '-') {
                    subtract(first_num, second_num);
                } else if(calculate == '*') {
                    multiply(first_num, second_num);
                } else if(calculate == '/') {
                    divide(first_num, second_num);
                }
            }
        } else if (calc == '+' || calc == '-' || calc == '*' || calc == '/') {
            console.log(calc);
            calculate += calc;
        } else if (calculate == '') {
            console.log(calc);
            first_num += calc;
            console.log(first_num);
        } else {
            console.log(calc);
            second_num += calc;
            console.log(second_num);
        }
    });
});

function calculation(num) {
    if(num == "+") {
        console.log("works");
    }
    console.log(typeof num);
}

function add(a, b) {
    //console.log(`${a} plus ${b}`);
    console.log(parseInt(a) + parseInt(b));
}

function subtract(a, b) {
    console.log(parseInt(a) - parseInt(b));

}

function multiply(a, b) {
    console.log(parseInt(a) * parseInt(b));
}

function divide(a, b) {
    console.log(parseInt(a) / parseInt(b));
}

function operate(operator, first_num, second_num) {
    if(operator == '+') {
        add(first_num, second_num);
    } else if(operator == "-") {
        subtract(first_num, second_num);
    } else if(operator == "*") {
        multiply(first_num, second_num);
    } else if(operator == "/") {
        divide(first_num, second_num);
    }
}