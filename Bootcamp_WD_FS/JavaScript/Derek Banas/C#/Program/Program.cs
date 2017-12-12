using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
 

delegate double GetSum(double num1, double num2);

namespace ConsoleApplication
 {

     class HelloMe
     {
             
    
     }

        struct Customers
        {
            private string name;
            private double balance;
            private int id;

            public void createCust(string n, double b, int i)
            {
                name = n;
                balance = b;
                id = i;
            }

            public void showCust()
            {
                Console.WriteLine("name " + name);
                Console.WriteLine("Balance " + balance);
                Console.WriteLine("Id " + id);

            }
        }

        public enum Temperature
        {
            Freeze,
            Low,
            Warm,
            Boil
        }

        class Animal
        {

            public double height { get; set;}
            public double weight { get; set;}
            public string sound { get; set; }

            public string name;

            public string Name
            {
                get {return name;}
                set {name = value;}
            }

            public Animal()
            {
                this.height = 0;
                this.weight = 0;
                this.name = "No Name";
                this.sound = "No Sound";
                numOfAnimals++;
            }


            public Animal(double height, double weight, string name, string sound)
            {
                this.height = height;
                this.weight = weight;
                this.name = name;
                this.sound = sound;
                numOfAnimals++;
            }

            static int numOfAnimals = 0;
            public static int getNumOfAnimals()
            {
                return numOfAnimals;
            }


            public string toString()
            {
                return String.Format("{0} is {1} inches tall, weighs {2} lbs and likes to say {3}", name, height, weight, sound);
            }


            public int getSum(int num1 = 1, int num2 = 1)
            {
                return num1 + num2;
            }

            public double getSum(double num1 = 1, double num2 = 1)
            {
                return num1 + num2;
            }

       
        

    static void Main(string[] args)
        {
            
            
            List<int> numList = new List<int>{5, 10, 15, 20, 25};

            List<int> oddNums = numList.Where(n => n % 2 == 1).ToList();

            foreach(int num in oddNums)
            {
                Console.WriteLine(num + ", ");
            }
            
            
            /*
            // Lambda Expression 
            Func<int, int, int> getSum = (x,y) => x + y;
            Console.WriteLine("5 + 3 = " + getSum.Invoke(5,3));
            */

            /*
            GetSum sum = delegate(double num1, double num2)
            {
                 return num1 + num2;
            };

            Console.WriteLine("5 + 10 = " + sum(5,10));
            */
  
            /*         
           Customers Anastasia = new Customers();

           Anastasia.createCust("Anastasia", 2000000, 060589);

           Anastasia.showCust();
            */

           /* 
            Temperature micTemp = Temperature.Low;

            switch(micTemp)
            {
                case Temperature.Freeze:
                    Console.WriteLine("Temp on Freezing");
                    break;
                case Temperature.Low:
                    Console.WriteLine("Temp on Low");
                    break;
                case Temperature.Warm:
                    Console.WriteLine("Temp on Warm");
                    break;
                case Temperature.Boil:
                    Console.WriteLine("Temp on Boil");
                    break;
            }
            */


           /* Animal ayax  = new Animal(15, 10, "Ayax", "Bah-Waooof");
            Console.WriteLine("{0} says {1}", ayax.name, ayax.sound);
            Console.WriteLine("Number of Animals " + Animal.getNumOfAnimals());
            Console.WriteLine(ayax.toString());
            Console.WriteLine(ayax.getSum(num2: 1.4,num1: 2.7));

            Animal businka = new Animal
            {
                name = "Businka",
                height = 5,
                weight = 15,
                sound = "Fff-ffff"
            };

            Dog yellow = new Dog();
            Console.WriteLine(yellow.toString());
            yellow = new Dog(20, 15, "Yellow", "Ayyyy", "Chicken");
            Console.WriteLine(yellow.toString());
        */

        /* 
        Shape rect = new Rectangle(5,5);
        Shape tri = new Triangle(5,5);

        Console.WriteLine("Rectangle Area " + rect.area());
        Console.WriteLine("Triangle Area " + tri.area());

        Rectangle combRect = new Rectangle(5,5) + new Rectangle(5,5);
        Console.WriteLine("combRect Area " + combRect.area());

        */

        /*
        KeyValue<string, string> superman = new KeyValue<string, string>("","");

        superman.key = "Superman";
        superman.value = "Clark Kent";

        KeyValue<int, string> samsungTv = new KeyValue<int, string>(0,"");

        samsungTv.key = 12345;
        samsungTv.value = "a 50 inch Samsung Tv";

        superman.showData();
        samsungTv.showData();
        */
        }
    }
    class Dog : Animal
    {
        public string favFood {get; set;}

        public Dog() : base()
        {
            this.favFood = "No Favorite Food";
        }

        public Dog(double height, double weight, string name, string sound, string favFood) : base(height, weight, name, sound)
        {
            this.favFood = favFood;
        }

        new public string toString()
        {
            return String.Format("{0} is {1} inches tall, weights {2} lbs and likes to say {3} and eat {4}", name, height, weight, sound, favFood);
        }
    }
 
    abstract class Shape
    {
        public abstract double area();

        public void sayHi()
        {
            Console.WriteLine("hello");
        }
    }

    public interface ShapeItem
    {
        double area();
    }

    class Rectangle : Shape
    {

        private double length;
        private double width;

        public Rectangle(double num1, double num2)
        {
            length = num1;
            width = num2;

        }
        public override double area()
        {
            return length * width;    
        }

        public static Rectangle operator+ (Rectangle rect1, Rectangle rect2)
        {
            double rectLength = rect1.length + rect2.length;
            double rectWidth = rect1.width + rect2.width;

            return new Rectangle(rectLength, rectWidth);
        }


    }

    class Triangle : Shape
    {
        private double theBase;
        private double height;
        public Triangle(double num1, double num2)
        {
            theBase = num1;
            height = num2;
        }
        public override double area()
        {
            return .5 * (theBase * height);
        }
    }
 
    class KeyValue <TKey, TValue>
    {
        public TKey key {get; set;}
        public TValue value { get; set;}

        public KeyValue(TKey k, TValue v)
        {
            key = k;
            value = v;
        }

        public void showData()
        {
            Console.WriteLine("{0} is {1} ", this.key,this.value);
        }

    }



}
 