const addTraditional = function (a, b) {
    return a + b;
}

const addUsingArrow = (a, b) => a + b;
const addUsingArrowButHasMulLines = (a,b) => {
    console.log("given a= " + a);
    console.log("given b = " + b);
    return a+b;
}

const arrayConstant = [1,2,3];
console.log("arrayConstant before incrementing using arrow function: " + arrayConstant);
arrayConstant.forEach((element) => {
    element++;
    console.log(element);
})

console.log("arrayConstant after incrementing using arrow function: " + arrayConstant);



console.log("addTraditional: " + addTraditional(1,3));
console.log("addUsingArrow: " + addUsingArrow(1,3)) ; 
console.log("addUsingArrowButHasMulLines: " + addUsingArrowButHasMulLines(1,3))