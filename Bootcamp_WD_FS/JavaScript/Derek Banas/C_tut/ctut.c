#include <stdio.h>
#include <stdlib.h>
// #include <string.h>


struct dogsFavs
{
    char *food;
    char *friend;
};



typedef struct dog 
{
    const char *name;
    const char *breed;
    int avgHeightCm;
    int avgWeightLbs;

    struct dogsFavs favoriteThings;

} dog;

void getDogsFavs(dog theDog) {
    printf("\n");
    printf("%s loves %s and his friend is %s\n\n", 
        theDog.name,
        theDog.favoriteThings.food,
        theDog.favoriteThings.friend); 
}

void setDogWeightPtr(dog *theDog, int newWeight)
{
    (*theDog).avgWeightLbs = newWeight;
    printf("The weight was changed to %d\n\n",
        theDog->avgWeightLbs);
}

void getDogInfo(struct dog theDog) 
{
    printf("\n");
    printf("Name: %s\n\n", theDog.name);
    printf("Breed: %s\n\n", theDog.breed);
    printf("Height: %d cms\n\n", theDog.avgHeightCm);
    printf("Weight: %d lbs\n\n", theDog.avgWeightLbs);

}

void getMemoryLocations(struct dog theDog) 
{
    printf("Name Location: %d\n\n", theDog.name);
    printf("Breed Location: %d\n\n", theDog.breed);
    printf("Height Location: %d\n\n", theDog.avgHeightCm);
    printf("Weight Location: %d\n\n", theDog.avgWeightLbs);
}


void main()
{
    printf("\n");
    
    dog benji = {"Benji", "Silky Terrier", 25, 9 , {"Meat", "Joe Camp"}};

    // getDogsFavs(benji);
    setDogWeightPtr(&benji, 11);

    printf("The Weight in Main() %d\n\n",
        benji.avgWeightLbs);
}