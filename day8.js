
// 1) https://github.com/rvsp/typescript-oops/blob/master/Practice/Movie.md


// Movie class

/*
class Movie {

    constructor(rating = "PG", title, studio) {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }

    static getPG() {
        const movies = [...arguments];
        return movies.filter(m => m.rating.toUpperCase().includes("PG"));
    }

}

const m1 = new Movie();

console.log("Movie created with no params:", m1);

const m2 = new Movie("R");

console.log("Movie created passing rating:", m2);

const pgMovies = Movie.getPG(m1, m2);

console.log("Movies with PG rating :", pgMovies);

const customMovie = new Movie("PG­13", "Casino Royale", "Eon Productions");

console.log("Movie by passing all params :", customMovie);

*/

// ************************************************************************************

// 2) https://github.com/rvsp/typescript-oops/blob/master/Practice/class-circle.md

// Circle class

/*
class Circle {

    constructor(radius = 1.0, color = "red") {
        this.radius = radius;
        this.color = color;
    }

    getRadius() {
        return this.radius;
    }

    setRadius(radius) {
        this.radius = radius;
    }

    getColor() {
        return this.color;
    }

    setColor(color) {
        this.color = color;
    }

    toString() {
        return "Radius= " + this.radius + " Color= " + this.color;
    }

    getArea() {
        return this.radius * this.radius * Math.PI;
    }

    getCircumference() {
        return 2 * this.radius * Math.PI;
    }

}

const c1 = new Circle();

console.log("Object created with no params:", c1);

const c2 = new Circle(2.0);

console.log("Object created passing radius:", c2);

const c3 = new Circle(3.0, "blue");

console.log("Object created passing radius and color:", c3);

const radius = c3.getRadius();
console.log("Getting radius using getRadius(): ", radius);

c3.setRadius(4)
console.log("Radius set using setRadius(): ", c3.getRadius());

const color = c3.getColor();
console.log("Getting color using getRadius(): ", color);

c3.setColor("purple")
console.log("Color set using setColor(): ", c3.getColor());

console.log("String using toString(): ", c3.toString());

const area = c3.getArea();
console.log("Area using getArea(): ", area);

const circumference = c3.getCircumference();
console.log("Circumference using getCircumference(): ", circumference);

*/

// ************************************************************************************

// 3) Write a “person” class to hold all the details.

/*

class Person {

    constructor(name, age, sex, occupation, dob) {
        this.name = name;
        this.age = age;
        this.sex = sex;
        this.occupation = occupation;
        this.dob = dob;
    }

}

const p1 = new Person("Elon", 50, "Male", "CEO", "28 June 1971");

console.log("Person class object:", p1);

*/