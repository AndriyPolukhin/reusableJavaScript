// Floating-point arithmetic

// #include <cs50.h>
#include <stdio.h>
#include <math.h>

float quarter = 25.00, dime = 10.00, nickel = 5.00, penny = 1.00;

int main(void)
{

    // Prompt user for cash
    float cash;
    do
    {
        cash = get_float("How much do should I give you? ");
    } while (cash <= 0);

    // Formula
    float chAmt = round(cash * 100);
    float coins = calculateCoins(chAmt);
    printf("Amount of Coins is: %.2f", coins);

    printf("Float is %f\n", cash);
    printf("float is %.2f\n", round(cash * 100));
}

float calculatecouns(chAmt)
{
    int count = 0;
    float a = chAmt;
    while (a > quarter)
    {
        count++;
        return a = a - quarter;
    }

    printf("Change Amount %.2f", a);
    printf("count is %i\n", count);
}