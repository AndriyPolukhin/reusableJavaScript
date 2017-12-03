function factorial(num) {
    if (num <= 1) {
        return 1;
    } else {
        return num * factorial(num - 1);
    }
}

document.write("Return a factorial of a 5 = ", factorial(5), "<br>");
