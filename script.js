let choice = prompt("Please enter an operation: +, -, /, *, %");
let num1 = parseFloat(prompt('please input your first number: '));
let num2 = parseFloat(prompt('please input your second number: '));
let result;

if(choice == '+') {
    result = num1 + num2;
    alert(num1 +choice +num2+ '=' + result);
}
else if(choice == '-'){
    result = num1 - num2;
    alert(num1 +choice +num2+ '='+ result)
}
else if(choice == '/'){
    result = num1 / num2;
    alert(num1 +choice +num2+ '='+ result)
}
else if(choice == '*'){
    result = num1 * num2;
    alert(num1 +choice +num2+ '='+ result)
}
else if(choice == '%'){
    result = num1 % num2;
    alert(num1 +choice +num2+ '='+ result)
}
else{alert("Please type in a correct input")};