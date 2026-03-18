from .animal import Animal

class Cat(Animal):
    def __init__(self, name, age, gender, breed):
        super().__init__(name, age, gender)
        self.breed = breed

    def __str__(self):
        return f"{super().__str__()}, breed: {self.breed}"
    
    def sound(self):
        print("Cat goes meow!")
    
    def eat(self):
        print("Cat eats fish.")