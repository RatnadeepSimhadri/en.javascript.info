importance: 2

---

# Two functions – one object

Is it possible to create functions `A` and `B` so that `new A() == new B()`?

```js no-beautify
function A() { ... }
function B() { ... }

let a = new A();
let b = new B();

alert( a == b ); // true
```

If it is, then provide an example of their code.

# Solution 

Yes , its possible because we can make the functions return a custom object `{....}` instead of this 
[Refer to the Solution here](./solution.md)

