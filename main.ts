// Problem 1
function p1(value: string | number) {
  if (typeof value === "string") {
    return value.length;
  } else {
    return value * value;
  }
}

// Problem 2
interface Person {
  address?: {
    city: string;
    street: string;
  };
  phone?: string;
}

function getAddressCity(value: Person) {
  return value.address?.city;
}

// Probelem 3
class Cat {}

function isCat(obj: unknown) {
  if (obj instanceof Cat) {
    return "yes, it's a cat.";
  }

  return "no, it's not a cat.";
}

// Problem 4
function addNumbers(list: Array<string | number>) {
  let sum: number = 0;

  for (let item of list) {
    if (typeof item == "number") {
      sum += item as number;
    }
  }

  return sum;
}

// problem 5
interface Car {
  make: string;
  model: string;
  year: number;
}

interface Driver {
  name: string;
  licenseNumber: number;
}

function combinator(car: Car, driver: Driver) {
  return {
    ...car,
    ...driver,
  };
}

// problem 6
function arrayChecker(list: unknown) {
  if (Array.isArray(list) && list.every((item) => typeof item === "number")) {
    return list.reduce((acc, num) => acc + num, 0);
  }

  console.log("Error: Please provide a list of numbers");
}

// problem 7
function findFirstOccurrence<T>(list: Array<T>, target: T) {
  return list.indexOf(target);
}

// problem 8
interface Product {
  name: string;
  price: number;
  quantity: number;
}

function getTotal(items: Array<Product>) {
  return items.reduce((acc, item) => acc + item.price * item.quantity, 0);
}
