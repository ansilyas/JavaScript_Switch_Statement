let car = prompt("Enter car name").toLowerCase();

switch (car) {
  case "audi":
    console.log("The car is Audi");
    break;

  case "toyota":
    console.log("The car is Toyota");
    let name = prompt("Enter Toyota Car's name").toUpperCase();
    switch (name) {
      case "GLI":
        console.log("This is Toyota car name is GLI");
        break;
      case "XLI":
        console.log("This is Toyota car name is XLI");
        break;
      default:
        console.log("Sorry we dont have this");
        break;
    }
    break;

  case "bwm":
    console.log("The car is BMW");

  case "honda":
    console.log("The car is Honda");
    break;

  case "mg":
    console.log("The car is MG");
    break;

  case "suzuki":
    console.log("The car is Suzuki");
    break;

  default:
    console.log("You have entered an invalid car name");
    break;
}