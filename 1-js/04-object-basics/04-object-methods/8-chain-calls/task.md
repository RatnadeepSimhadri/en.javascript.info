importance: 2

---

# Chaining

There's a `ladder` object that allows to go up and down:

```js
let ladder = {
  step: 0,
  up() { 
    this.step++;
    return this;
  },
  down() { 
    this.step--;
    return this;
  },
  showStep: function() { // shows the current step
    alert( this.step );
    return this;
  }
};
```

Now, if we need to make several calls in sequence, can do it like this:

```js
ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1
ladder.down();
ladder.showStep(); // 0
```

Modify the code of `up`, `down` and `showStep` to make the calls chainable, like this:

```js
ladder.up().up().down().showStep().down().showStep(); // shows 1 then 0
```

Such approach is widely used across JavaScript libraries.

> ✅ Key to Method Chaining to to return the Object of the method after execution logic of the method 
```js

let user = {
  name: 'Ratna',
  steps: 0,
  stepForword() {
    this.steps++;
    return this;
  }, 

  stepBaak(){
    this.steps--;
    return this;
  },

  noOfSteps(){
    console.log(this.steps);
    return this;
  }
}

```