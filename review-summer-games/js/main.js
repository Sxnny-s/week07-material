//Create a function that takes in an array of numbers. Multiply each number together and alert the product. 

function multiply(array){
    let x = 1
    array.forEach((e,i) => {
        x *= e
    });
    return x   
}
const z = [1,2,3]

console.log(multiply(z))