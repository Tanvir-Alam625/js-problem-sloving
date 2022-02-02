// function
function findTriangleArea(firstValue, secondValue) {
    if(typeof firstValue != 'number' || typeof secondValue != 'number'){
        return " please input the valid number";
    }
    if(firstValue < 1 || secondValue < 1){
        return "please input muste be 1 gatter then ";
    }else{
        var area = (firstValue*secondValue)/2;
        return area;
    }
    

}
// input
const height = 2;
const base = 5;
// function calling
const output = findTriangleArea(height,base)
console.log(output);