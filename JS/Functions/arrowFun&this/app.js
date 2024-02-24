const person = {
    firstName: "Viggo",
    lastName: "Mortensen",
    fullName: ()=> {
        return `${this.firstName} + ${this.lastName}`
    }
};
 //Inside an arrow function teh word this refers to the window.
