var takeShower = function () { return "Showering"; };
var cookFood = function () {
    var dishes = ["Oatmeal", "Eggs", "Protein Shake"];
    return dishes[Math.floor(Math.random() * dishes.length)];
};
var eatBreakfast = function () {
    var meal = cookFood();
    return "Eating " + meal;
};
var wakeUp = function () {
    takeShower();
    eatBreakfast();
    console.log("Ok Ready 2 go");
};
wakeUp();
//# sourceMappingURL=callstack.js.map