#include <cstdlib>
#include <iostream>

using namespace std;

int main()
{
    int tablica[10] = {3,0,1,7,5,4,2,9,8,6};

    for (int i=0; i<9; i++)
    {
        for (int j=0; j<9; j++)
        {
            if (tablica[j]>tablica[j+1])
            {
                swap(tablica[j], tablica[j+1]);
            }
        }
    }

    for (int i = 0; i<10; i++)
    {
        cout << tablica[i] << " ";
    }

   
    return 0;
}