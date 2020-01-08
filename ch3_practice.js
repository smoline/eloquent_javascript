// Bindings and scopes
const halve = function (n) {
  return n / 2
}

let n = 10
console.log(halve(100))
// → 50
console.log(n)
// → 10

const hummus = function (factor) {
  const ingredient = function (amount, unit, name) {
    let ingredientAmount = amount * factor
    if (ingredientAmount > 1) {
      unit += "s"
    }
    console.log(`${ingredientAmount} ${unit} ${name}`)
  };
  ingredient(1, "can", "chickpeas")
  ingredient(0.25, "cup", "tahini")
  ingredient(0.25, "cup", "lemon juice")
  ingredient(1, "clove", "garlic")
  ingredient(2, "tablespoon", "olive oil")
  ingredient(0.5, "teaspoon", "cumin")
}

console.log(hummus(1))

const square1 = (x) => { return x * x; };
const square2 = x => x * x;

// Closure
function wrapValue(n) {
  let local = n;
  return () => local;
}

let wrap1 = wrapValue(1);
let wrap2 = wrapValue(2);
console.log(wrap1());
// → 1
console.log(wrap2());
// → 2

function multiplier(factor) {
  return number => number * factor;
}

let twice = multiplier(2);
console.log(twice(5));
// → 10

// Recursion
function power(base, exponent) {
  if (exponent == 0) {
    return 1;
  } else {
    return base * power(base, exponent - 1);
  }
}

console.log(power(2, 3));
// → 8

// But this implementation has one problem: in typical JavaScript implementations,
// it’s about three times slower than the looping version. Running through a simple
// loop is generally cheaper than calling a function multiple times.

// Consider this puzzle: by starting from the number 1 and repeatedly either 
// adding 5 or multiplying by 3, an infinite set of numbers can be produced.
// How would you write a function that, given a number, tries to find a sequence of
// such additions and multiplications that produces that number?

// For example, the number 13 could be reached by first multiplying by 3
// and then adding 5 twice, whereas the number 15 cannot be reached at all.

// Here is a recursive solution:
function findSolution(target) {
  function find(current, history) {
    if (current == target) {
      return history;
    } else if (current > target) {
      return null;
    } else {
      return find(current + 5, `(${history} + 5)`) ||
        find(current * 3, `(${history} * 3)`);
    }
  }
  return find(1, "1");
}

console.log(findSolution(15));
// → (((1 * 3) + 5) * 3)

// Define f to hold a function value
const f = function (a) {
  console.log(a + 2);
};

// Declare g to be a function
function g(a, b) {
  return a * b * 3.5;
}

// A less verbose function value
let h = a => a % 3;