importance: 5

---

# Create a calculator

Create an object `calculator` with three methods:

- `read()` prompts for two values and saves them as object properties with names `a` and `b` respectively.
- `sum()` returns the sum of saved values.
- `mul()` multiplies saved values and returns the result.

```js
let calculator = {
  read(){
    this.a = prompt('Enter the first Value');
    this.b = prompt('Enter the Second Value');
  },
  sum(){
    return this.a + this.b;
  }, 
  mul() { this.a * this.b};
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );
```

[demo]
