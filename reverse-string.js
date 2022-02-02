// constant variable 
const myAddress = "Buraburi, Tetulia , Panchagrah";
// function 
function reverseStrings(text) {
    let reverse = "";
    for( const charecter of text){
        reverse = charecter + reverse;
    }
    return reverse;
}
// function calling 
var myOutput = reverseStrings(myAddress);
console.log(myOutput);