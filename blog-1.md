# Union and Intersection Types in TypeScript

### What is a Union Type?

A **Union Type** in TypeScript is a flexible type that allows a variable to hold a value of one among multiple specified types. It provides type safety while allowing flexibility when a variable can represent more than one possible type. Union Types allow to specify multiple types for a single property.

### Syntax

Union types are defined by using the `|` (pipe) symbol to separate the types.

### Example

In this example, we have a `User` type where the `age` property can be either a `number` or a `string`.

```typescript
// Define a User age type with union property
type User = {
  name: string;
  // age can be either a number or a string
  age: number | string;
};

// Example 1: User with a number age
const user1: User = { name: "Alice", age: 30 };

// Example 2: User with a string age
const user2: User = { name: "Bob", age: "thirty" };

// TypeScript will show an error if you try to assign a type other than number or string
// const invalidUser: User = { name: "Eve", age: true };
// Error: Type 'boolean' is not assignable to type 'string | number'.
```

# Intersection Types in TypeScript

## What is an Intersection Type?

An **Intersection Type** allows you to combine multiple types into a single type. When you use intersection types, all types involved must be satisfied. This is different from a **Union Type**, where only one of the types needs to be satisfied.

- **Intersection Type**: All types must be present.
- **Union Type**: Any one of the types can be present.

In TypeScript, intersection types are used to ensure that a value conforms to multiple types simultaneously. The intersection is denoted by the `&` (ampersand) symbol.

## Example of Intersection Type

In this example, we define two types: `FrontendDeveloper` and `BackendDeveloper`. We then create a new type `FullStackDeveloper` that combines both the `FrontendDeveloper` and `BackendDeveloper` types using an intersection.

```typescript
// Define a FrontendDeveloper type
type FrontendDeveloper = {
  skills: string[];
  designation1: "Frontend Developer";
};

// Define an BackendDeveloper type
type BackendDeveloper = {
  skills: string[];
  designation2: "Backend Developer";
};

// Combine both types using an intersection type
type FullStackDeveloper = FrontendDeveloper & BackendDeveloper;

// use the FullStackDeveloper type
const fullStackDeveloper: FullStackDeveloper = {
  skills: ["HTML", "CSS", "JS", "EXPRESS JS", "MONGODB"],
  designation1: "Frontend Developer",
  designation2: "Backend Developer"
};
```

If we do not use designation1 or designation2 then `typescript` show error. `designation1` or `designation2` is missing.
