#include <stdio.h>

int main() {


    printf("\n");

    int secretNumber = 10, numberGuessed = 0;

    while(1) {

        printf("Guess my Secret Number: ");
        scanf(" %d", &numberGuessed);

        if(numberGuessed == secretNumber) {
            printf("You got it\n");
            break;
        }
    }
}