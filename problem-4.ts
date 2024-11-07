{
  // Problem-4

  type Circle = {
    shape: "circle";
    radius: number;
  };

  type Rectangle = {
    shape: "rectangle";
    width: number;
    height: number;
  };

  const calculateShapeArea = (shape: Circle | Rectangle): number => {
    if (shape.shape === "circle") {
      let circleArea = Math.PI * (shape.radius * shape.radius);
      return circleArea;
    } else {
      let rectangleArea = shape.width * shape.height;
      return rectangleArea;
    }
  };

  // Circle Area
  const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
  console.log(circleArea);

  // Rectangle Area
  const rectangleArea = calculateShapeArea({
    shape: "rectangle",
    width: 4,
    height: 6
  });
  console.log(rectangleArea);
}
