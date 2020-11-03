##########  React uses ES6 - published in 2015. New features include:
- classes
- Arrow functions
- Variables

##########  classes  #############

A class is a type of function, but instead of using the keyword 'function' to iniate it, 
we use the keyword 'class', and the properties are assigned inside a 'constructor()' MSInputMethodContext. 

##########   
Example: A simple class constructor

class Car {
    constructor(name) {
        this.brand = name;
    }
}

############
Example: Creating an object called "mycar" based on the Car class:

class Car {
    constructor(name) {
        this.brand = name;
    }
}

mycar = new Car("Ford")

- The constructor function is called automatically when the object is initialized. 

###########
Method in classes

You can add your own methods in a class

###########
Example - create a method named "present":

class Car {
    constructor(name) {
        this.brand = name;
    }
    
    present() {
        return 'I have a ' + this.brand;
    }
}

mycar = new Car("Ford");
mycar.present();

---- document.write(mycar.present()); to invoke/run 

You call the method by referring to the object's method name followed by parenthesis 
(parameters would go inside the parenthesis). 

###############
Class inheritance
To create a class inheritance, use the 'extends' keyword.
A class created with a class inheritance inherits all the methods from another class:

##############
Example - Create a class named "Model" which will inherit the methods from the "Car" class:

class Car {
    constructor(name) {
        this.brand = name;
    }
    
    present() {
        return 'I have a ' + this.brand;
    }
}

class Model extends Car {
    constructor(name, mod) {
        super(name);
        this.model = mod;
    }
    show() {
        return this.present() + ', it is a ' + this.model
    }
}
mycar = new Model("Ford", "Mustang");
mycar.show();

#################
The super() method refers to the parent class.
By calling super() method in the constructor method, we call the parent's
constructor method and gets access to the parent's properties and methods. 


################
Arrow functions - were introduced in ES6
Allow us to write shorter function syntax:

Before:

hello = function() {
    return "Hello World!";
}

With Arrow function:

hello = () => {
    return "Hello World!";
}

#######It gets shorter! If the function has only one statement, and the statement returns a
value, you can remove the brackets and the return keyword:

#########Arrow Functions Return value by default:

hello = () => "Hello World!";

##########This only works if the function has only one statement. 

If you have parameters, you pass them inside the parenthesis:

##########Arrow function with parameters:

hello = (val) => "Hello " + val;

##########In fact, if you only have one parameter, you can skip the parenthesis as well:

###########Arrow function without parenthesis:

hello = val => "Hello " + val;


