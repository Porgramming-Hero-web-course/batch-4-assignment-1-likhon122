{
  // Problem-5
  const getProperty = <X, Y extends keyof X>(objArguments: X, property: Y) => {
    return objArguments[property];
  };

  type Person = {
    name: string;
    age: number;
  };

  const person: Person = { name: "Alice", age: 30 };
  const propertyValue = getProperty(person, "name");
  console.log(propertyValue);
}
