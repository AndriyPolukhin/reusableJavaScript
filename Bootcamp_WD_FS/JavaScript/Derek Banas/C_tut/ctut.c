#include <stdio.h>
#include <stdlib.h>
#include <string.h>


int globalVar = 0;

int addTwoInts(int num1, int num2) {
    return num1 + num2;
}

void changeVariables() {
    int age = 40;

    printf("age inside of function = %d\n\n", age);
    

    globalVar = 100;

    printf("globalVar inside of function = %d\n\n", globalVar);
}


void main()
{
    printf("\n");
    
    int total = addTwoInts(4,5);

    printf("The sum is %d\n\n", total);

    int age = 10;

    globalVar = 50;

    printf("age before a call to the function = %d\n\n", age);

    printf("globalVar before a call to the function = %d\n\n", globalVar);

    changeVariables();

    printf("age after a call to the function = %d\n\n", age);

    printf("globalVar after a call to the function = %d\n\n", globalVar);
}