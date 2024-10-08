function XO(str) {
    //code here
  let x = 0
  let o = 0
  let xoArray = str.split('')
  
  xoArray.forEach((e) => {
    
  if(e == 'x' || e == 'X'){
    x += 1
    }
    else if(e == 'o' || e == 'O'){
    o += 1
    }})
  
  return x == o
}
console.log(XO("xo"));        // true
console.log(XO("xxoo"));      // true
console.log(XO("xxxooo"));    // false
console.log(XO("xoo"));       // false
console.log(XO(""));