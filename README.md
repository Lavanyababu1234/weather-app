# Design Pattern

## Factory Pattern

**Factory Design Pattern :**

>A factory is an object which is used for creating other objects. we can say that a factory is a class with a method. That method will create and return different types of objects based on the input parameter, it received

>The basic principle behind the factory design pattern is that, at run time, we get an object of similar type based on the parameter we pass.


**UML Class Diagram**

![image](uploads/040410756edf4a8b5fdf8d3c446f7a0f/image.png)

`Product` This defines the interface of objects the factory method creates.
 
`ConcreteProduct` This is a class that implements the Product interface.

`Creator`This is an abstract class and declares the factory method, which returns an object of type Product.

`ConcreteCreator`This is a class that implements the Creator class and overrides the factory method to return an instance of a ConcreteProduct.

**Sample Code**

**Product**

```csharp 
 public interface Animal
    {
          string  speak();
          string  dance();
    }
```
**ConcreteProduct**

**Cat** 

```csharp 

namespace FactoryMethodDesignPattern
{

    public class Cat : Animal
    {
        public string speak()
        {
            return "Meow Meow";
        }
        public string dance()
        {
            return "Dam Dam";
        }
    }

}
```
**dog** 
```csharp
namespace FactoryMethodDesignPattern
{
  public  class Dog:Animal
    {
        public string speak()
        {
            return "Bark bark";
        }
        public string dance()
        {
            return "Ba Ba";
        }
    }
}
```
**Creator**
```csharp
 FactoryMethodDesignPattern
{
     abstract class AnimalFactory
    {
        protected abstract Animal MakeAnimal();
        public Animal CreateAnimal()
        {
            return this.MakeAnimal();
        }
    }
}
```
**ConcreteCreator**

```csharp
namespace FactoryMethodDesignPattern
{
    class CatFactory:AnimalFactory
    {
        protected override Animal MakeAnimal()
        {
            Animal animal = new Cat();
            return animal;
        }
    }
    class DogFactory : AnimalFactory
    {
        protected override Animal MakeAnimal()
        {
            Animal animal = new Dog();
            return animal;
        }
    }
}
```
**Factory Pattern Client Demo**

```csharp
namespace FactoryMethodDesignPattern
{
    class Program
    {
        static void Main(string[] args)
        {
            Animal animal = null;
            Console.WriteLine("Enter the animal you want to create :");

            string ani = Console.ReadLine();
            switch (ani.ToLower())
            {
                case "cat": 
                    animal = new CatFactory().CreateAnimal();
                    break;
                case "dog":
                    animal = new DogFactory().CreateAnimal();
                    break;
                default:
                    break;
            }
            if (animal != null)
            {
                Console.WriteLine("Animal Type : " + animal.GetType().Name);
                Console.WriteLine(animal.GetType().Name + " Speak : " + animal.speak());
                Console.WriteLine(animal.GetType().Name + " Dance like : " + animal.dance());

            }
            else
            {
                Console.Write("Invalid Animal Type");
            }
        }
    }
}
```
**Output**

![image](uploads/775112f9790f36df2ddda339317bb6cb/image.png)

### Reference
https://gitlab.com/vr.srinidhi/retailplusrota/-/blob/master/Lavanya%20B/FactoryMethodDesignPattern.zip



