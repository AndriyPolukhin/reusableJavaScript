#include <stdio.h>
#include <stdlib.h>
// #include <string.h>


void editMessageSent(char* message , int size) 
{

    char newMessage[] = "New Message";

    if(size > sizeof(newMessage)) 
    {

        for(int i = 0;  i < sizeof(newMessage); i++)
        {
            message[i] = newMessage[i];
        }

    } 
    else
    {

        printf("New Message is to big\n\n");

    }
}


void main()
{
    printf("\n");
    
    char randomMessage[] = "Edit my function";

    printf("Old Message: %s\n\n",
           randomMessage);

    editMessageSent(randomMessage,
        sizeof(randomMessage));

    printf("New Message: %s\n\n",
        randomMessage);


}