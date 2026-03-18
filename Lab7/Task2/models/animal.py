class Animal:
    def __init__(self, name, age, gender):
        self.name = name
        self.age = age
        self.gender = gender

    def __str__(self):
        return f"Name: {self.name}, age: {self.age}, gender: {self.gender}"
    
    def sound(self):
        print("Animal makes sound!")

    def eat(self):
        print("Animal eats.")