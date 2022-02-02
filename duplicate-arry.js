// Array 
const number = [346,235,46,56,56,34,34,3,23,23,23,56,67,78];
// function 
function findNumberDuplicate(number) {
    const uniquieElement = [];
    for(const element of number){
        if(uniquieElement.indexOf(element) == -1){
            uniquieElement.push(element);
        }

    }
    return uniquieElement;
    
}
// function calling 
var output = findNumberDuplicate(number);
console.log(output);