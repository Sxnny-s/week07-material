//Create a function that takes in an array of numbers. Return a new array containing every even number from the original array (do not use map or filter)

function first(array){
    let even = []
    array.forEach(e => {
        if(e % 2 == 0){
            even.push(e)
        }else{

        }
    });
    return even

}

let z = [1,2,3,4,5,6,7,8,9]
console.log(first(z))




const maps = z.map(e => e % 2 == 0)
 
console.log(maps)


const fill = z.filter(e => e % 2 == 0)
console.log(fill)