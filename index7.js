//object destructuring
const band = {
    bandName: "Led Zeppein",
    famousSong: "stairway to heaven",
    year: 1968,
    anotherFamousSong: "kashmir"
};

// const var1 = band.bandName;
// const var2 = band.famousSong;
// console.log(var1, var2);

let {bandName:var1,year, ...restProps } = band;//varialeName should be name as mentioned key in object;(variableName can be changed using ':' like bandName:var1)
bandName = "jhoom baba";
console.log(year);
console.log(var1);
console.log(restProps);


