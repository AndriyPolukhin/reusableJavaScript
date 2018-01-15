// #include <cs50.h>
#include <stdio.h>
#include <math.h>
#include <string.h>

long long ifValid(long long card);

string status = "INVALID";

int main(void)
{

    // Prompt user for cash
    long long card;
    do
    {
        card = get_long_long("Change owned: ");
    } while (card < 999999999999);

    long long checkNum = ifValid(card);
    printf("%s and %lld\n", status, checkNum);
    return 0;
}

long long ifValid(long long card)
{
    printf("%s and %lld\n", status, card);
}