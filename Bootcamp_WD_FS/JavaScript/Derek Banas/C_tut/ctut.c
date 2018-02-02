#include <stdio.h>

struct dogsFavs 
{
    char *food;
    char *friend;
};

typedef struct dog
{
    const char *name;
    const char *beed;
    int avgHeightCm;
    int avgWeightLbs;

    struct dogsFavs favoriteThings;

} dog;

void getDogsFavs(dog theDog)
{
    printf("\n");

    printf("%s lovaes %s and his friend is %s\n\n", 
        theDog.name,
        theDog.favoriteThings.food,
        theDog.favoriteThings.friend);
}

void main()
{
    dog benji = {"Benji", "Silky Terrier", 25, 9, {"Meat", "Joe Camp"}};

    getDogsFavs(benji);
}