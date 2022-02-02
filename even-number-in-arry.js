// variable 
const numbers = [12,165,687,65,68,6,68,4,3];
//fuunction 
function findEvenNumberInArry(number) {
    let even = [];
    for(let i=0; i <number.length; i++){
        let myElement = number[i];
        if( myElement % 2 == 0){
           even.push(myElement);
        }
    }
    return even;
}
// funtion  calling 
var output = findEvenNumberInArry(numbers);
console.log(output);