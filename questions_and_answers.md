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

#### Answer: A

<i> In the given code,The variable greeting is declared but not assigned a value, and then a variable greetign is assigned an empty object {}. When you log greetign, it will output an empty object {} because that's what it has been assigned to, despite the typo in the variable name.

</i>

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

#### Answer: C

<i> In this case, the + operator is used for concatenating strings when at least one of the operands is a string. So, when you use sum(1, "2"), it converts the number 1 to a string and concatenates it with the string "2", resulting in the string "12"</i>

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

#### Answer: A

<i> we first create an array food containing four emoji strings. Then, we create an object info with a property favoriteFood that is initially assigned the value of the first element of the food array, which is "🍕".In the next line, we change the value of info.favoriteFood to "🍝". This does not affect the food array itself, so when we log food, it remains unchanged and still contains the original values.</i>

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

#### Answer: B

<i>sayHi function expects an argument name to be passed to it when it's called. However, in the console.log(sayHi()); line, no argument is provided, so name is undefined. The function still runs and returns "Hi there, undefined" as the output</i>

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

#### Answer: C

<i> a variable count is initialized to 0, and an array nums is defined with four elements. The forEach method is used to iterate through each element of the nums array. In the callback function, if (num) checks if the current element num is truthy  and if it is, it increments the count variable by 1. Since three out of the four elements in the nums array (1, 2, and 3) are truthy, the count variable will be incremented three times, resulting in a final value of 3. Therefore, when console.log(count) is executed, it will output 3.</i>

</p>
</details>
