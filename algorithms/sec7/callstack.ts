const takeShower = () => "Showering";

const cookFood = () => {
  const dishes = ["Oatmeal", "Eggs", "Protein Shake"];
  return dishes[Math.floor(Math.random() * dishes.length)];
};

const eatBreakfast = () => {
  const meal = cookFood();
  return `Eating ${meal}`;
};

const wakeUp = () => {
  takeShower();
  eatBreakfast();
  console.log("Ok Ready 2 go");
};

wakeUp();
