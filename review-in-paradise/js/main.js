// *Variables*
// Declare a variable, reassign it to your favorite food, and alert the value
let a;
a = 'taco'
alert(a)

//Declare a variable, assign it a string, alert the second character in the string (Use your google-fu and the MDN)
let x 
x = "car"
alert(x[1])

// *Functions*
// Create a function that takes in 3 numbers. Divide the first two numbers and multiply the last. Alert the product. Call the function.
function num3(a,b,c){
    let product = (a / b) * c 
    alert(product)
}

num3()
// Create a function that takes in 1 number. Console log the cube root of the number. Call the function.
function num1(a){
    cubeRoot = Math.cbrt(a)
    console.log(cubeRoot)

}
num1()

// *Conditionals*
//Create a function that takes in a month. If it is a summer month alert "YAY". If another other month, alert "Booo"
function month(month){
    if(month == 'june' || month == 'july' || month == 'august' || month == 'september'){
        alert('YAY')
    }else{
        alert('Booo')
    }
}

//*Loops*
//Create a function that takes in a number. Console log every number from 1 to that number while skipping multiples of 5.


function loop(num){

    for(i=1;i<=num;i++){
        if(i % 5 == 0){

        }else{
            console.log(i)

        }
    }

}