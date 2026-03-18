from models.animal import Animal
from models.dog import Dog
from models.cat import Cat

def main():

    animal = Animal("Greg", 6, "Male")
    print(animal)
    animal.sound()
    animal.eat()

    print("--------------------")

    d = Dog("Ben", 10, "Male", "German Sheppard")
    print(d)
    d.sound()
    d.eat()

    print("--------------------")

    c = Cat("Alex", 3, "Male", "Sphynx")
    print(c)
    c.sound()
    c.eat()

main()
