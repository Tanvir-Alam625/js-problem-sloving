// function 
function findRectangleAream(firstValue, secondValue){
    if(typeof firstValue != 'number' || typeof secondValue != 'number'){
        return " please input the valid number";
    }
    if(firstValue < 1 || secondValue < 1){
        return "please input muste be 1 gatter then ";
    }
    else{
        var area = firstValue*secondValue;
    }
    return area;
}
// input 
var height = 21;
var width = 56;


// function calling
var output = findRectangleAream(height,width);
console.log("Rectangle Area is: ",output);