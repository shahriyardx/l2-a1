## What are some benefits of using TypeScript over JavaScript in a project?

TypeScript provides static typing, enhancing code reliability and readability. Its static nature catches errors early, reducing runtime issues and improving maintainability. The language, a superset of JavaScript, supports ECMAScript features and offers advanced tooling with IDE support, facilitating better development experiences. With powerful refactoring tools, TypeScript enables safer code modifications. The strong community and extensive documentation contribute to its popularity, making it a preferred choice for larger projects where type safety and scalability are paramount, while JavaScript may be chosen for smaller, time-sensitive endeavors or existing codebases.

## What is the purpose of the optional chaining (?.) and nullish coalescing (??) operators in TypeScript, and how do they work? Provide an example for each
The optional chaining operator (?.) is used to handle situations where an object may be null or undefined. It allows you to access nested properties or methods without causing an error if any intermediate property is null or undefined. If any part of the chain is null or undefined, the expression short-circuits, and the result is undefined.

```ts
interface Person {
  name?: {
    first: string;
    last: string;
  };
}

const person: Person = {};

const firstName = person.name?.first;
console.log(firstName); // Output: undefined
```

The nullish coalescing operator (??) provides a default value for a variable or expression when the left-hand side is null or undefined. It is useful when you want to use a fallback value only when the variable is specifically null or undefined, excluding other falsy values like 0, false, or an empty string.

```ts
const defaultValue = "Default Value";
const userInput: string | undefined = undefined;

const result = userInput ?? defaultValue;
console.log(result); // Output: Default Value
```

## How do you handle asynchronous operations in TypeScript, and what are the advantages of using async/await over callbacks or Promises?.
In typescript we handle asynchronous operations by providing async in front of the function declaration and when we call it, we write await. it helps reducing the use of callbacks and making code look clean and bypassing the callback hell situation

## How can you use TypeScript's enums, and what are their advantages?.
In TypeScript, enums allow developers to define named sets of constant values. Enumerations can make code more readable and maintainable by providing descriptive names to values. 

## Explain the role of type guards in TypeScript and provide an example of a custom type guard.
The role of type guards in typescript is to specify a block of code for specific type, when we have a type of unknown we can use type guard to check what type the variable is and execute code or function depending on the condition

```ts
function double(val: unknown) {
    if (typeof val === "number") {
        return calculateDouble(val)
    }

    throw new Error("not a number")
}
```

##  Can you give an example of how to use "readonly" properties in TypeScript?

In TypeScript, the readonly modifier is used to make properties of an object immutable, meaning they cannot be reassigned once they are set. This provides additional safety and helps prevent accidental modification of certain properties. 

In TypeScript, a union type allows a variable to have multiple types. It is denoted using the | (pipe) symbol between the types. A value of a union type can be of any of the specified types. Union types are useful when a variable can have different forms or when dealing with values that can be one of several types.

```ts
let value: string | number;

value = 'Hello, TypeScript!';
value = 42;

value = true // Error
```