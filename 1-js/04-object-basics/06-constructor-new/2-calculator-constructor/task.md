importance: 5

---

# Create new Calculator

Create a constructor function `Calculator` that creates objects with 3 methods:

- `read()` prompts for two values and saves them as object properties with names `a` and `b` respectively.
- `sum()` returns the sum of these properties.
- `mul()` returns the multiplication product of these properties.

For instance:

```js
let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );
```

[demo]

# Solution 

```js

function Calculator(){
    this.read = function(){
        this.a = prompt("Enter the First Value");
        this.b = prompt("Enter the Second value");
    }, 

    this.sum = function(){
        return this.a + this.b;
    }, 

    this.mul = function(){
        return this.a * this.b;
    }
}
```