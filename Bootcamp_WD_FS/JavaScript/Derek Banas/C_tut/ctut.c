#include <stdio.h>
#include <stdlib.h>
#include <string.h>





char * convertBase(unsigned int numberToConvert, int base, char *pConvertedNumber)
{
    
    char allValues[] = "0123456789abcdef";

    if(base < 2 || base > 16)
    {
        printf("Enter a number between 2 and 16\n");
        exit(1);
    }
 

    pConvertedNumber[32] = '\0';

    do {

        int value = numberToConvert % base;
        pConvertedNumber = pConvertedNumber - 1;
        *pConvertedNumber = allValues[value];
        numberToConvert /= base;

    } while(numberToConvert != 0);

    
    return pConvertedNumber;
}


int main(void)
{

    unsigned int numberSix = 6; // 110
    unsigned int numberSeven = 7; // 111

    char *pConvertedNumber;
    pConvertedNumber = malloc(33 * sizeof(char));

    unsigned int analyzeMyBits = 170;
    unsigned int theMask = 15;
    unsigned int last4Bits = analyzeMyBits & theMask;

    printf("Last 4 Bits : 5s\n", convertBase(last4Bits, 2, pConvertedNumber));


    free(pConvertedNumber);

    return 0;
}