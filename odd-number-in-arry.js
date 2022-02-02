// variable 
const numbers = [12,165,687,65,68,6,68,4,3,12,165,687,65,68,6,68,4,3,12,165,687,65,68,6,68,4,3,12,165,687,65,68,6,68,4,3,12,165,687,65,68,6,68,4,3];
//fuunction 
function findEvenNumberInArry(number) {
    let odd = [];
    for(let i=0; i <number.length; i++){
        let myElement = number[i];
        if( myElement % 2 == 1){
           odd.push(myElement);
        }
    }
    return odd;
}
// funtion  calling 
var output = findEvenNumberInArry(numbers);
console.log(output);