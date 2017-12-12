using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
 

    namespace ConsoleApplication
    {
        class Program
        {
             static void Main(string[] args)
            {
                
               double number1 = 10.5;
               double number2 = 15;

               Console.WriteLine(Math.Abs(number1));
               Console.WriteLine(Math.Ceiling(number1));
               Console.WriteLine(Math.Floor(number1));
               Console.WriteLine(Math.Max(number1,number2));
               Console.WriteLine(Math.Min(number1, number2));
               Console.WriteLine(Math.Pow(number1,2));
               Console.WriteLine(Math.Round(number1));
               Console.WriteLine(Math.Sqrt(number1));

            }
        }
    }

