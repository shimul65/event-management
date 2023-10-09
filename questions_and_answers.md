<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer is --> A: {}

<i>Although greeting is declare initially but '{}' is assign in greetign and when you console greetign it will give back {} </i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer is --> B: "12"

<i>Here, sum function receive two parameters and return sum of this two params. When you call sum function with a number and a string it will concatenation this two value (number and string) and return string ("12")  </i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer is ---> A: `['🍕', '🍫', '🥑', '🍔']`

<i>Here, info.favoriteFood = "🍝"; is changing the value of the favoriteFood property, but it doesn't have any direct connection to the food array that's why the food array will remain same</i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer ---> B: `Hi there, undefined`

<i>sayHi() function expect a parameter but when tou call this sayHi() function without passing a parameter and console or return it in template string like return `Hi there, ${name}` , but the value of name is undefined as you don't give any parameter when you call this function that's why it will return --> `Hi there, undefined` </i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer is ---> C: 3

<i>Here, initially let a value of count is 0 and nums is a array with 4 numbers (0,1,2,3). by using for each loop you gat a num and the condition is if number is true so count value is increase by 1.in first loop 0 is get a num which is falsy and count variable doesn't change after 3 times num will get truthy value and count value is finally 3.</i>

</p>
</details>
