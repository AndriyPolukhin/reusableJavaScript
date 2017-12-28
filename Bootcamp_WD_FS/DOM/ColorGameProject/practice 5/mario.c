// Conditions and relational operators
// #include <cs50.h>
#include <stdio.h>

void space(int b);
void hash(int c);

int main(void)
{
    int a = get_int("Height prompt: ");

    while (!((a > 0) && (a < 24 ))) {
      a = get_int("Height prompt: ");
    }

// printf("Height true: %i\n", a);

    while(a > 0) {
        space(a);
        hash(a);
        printf("\n");
        a--;
    }

}

void space(int b)
{
    for (int i = b; i > 0; i--)
    {
        printf(" ");
    }
}

void hash(int c)
{

for (int i = 1; i < c; i++)
    {
        printf("#");
    }
}