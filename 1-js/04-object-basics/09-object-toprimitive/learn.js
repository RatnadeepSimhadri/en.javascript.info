// Using Symbol.toPrimitive for primitive Conversion
let user = {
    name: "John",
    money: 100,
    [Symbol.toPrimitive] : function(hint){
        console.log(`hint: ${hint}`);
        return hint == "string" ? `{ name : ${this.name}}`: this.money
        // return {} This is going to result in an error due ot Strict Type Checking 
    }
}

console.log(user);
console.log(+user);
console.log(user + 5000);

// Using toString and valueOf for Conversion 

user = {
    name: "John",
    money: 100, 

    toString(){
        return `{ name : ${this.name}}`
    },

    valueOf(){
        return this.money;
    }
}


console.log(user);
console.log(+user);
console.log(user + 5000);