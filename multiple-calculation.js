// ===============================
// Books Price Calcultion 
// ===============================

//  books  of quantity
const javaProgramming= 4;
const jsProgramming= 3;
const cProgramming= 7;

// function 
function findBookPrice(javaQuantity, jsQuantity , cQuantity){
    const perJavaBookPrice = 300; 
    const perJsBookPrice = 500; 
    const perCBookPrice = 200;
    if(javaQuantity < 0 || jsQuantity < 0 || cQuantity < 0){
        return `please input the positive number `;
    }
    if(javaQuantity == 0 && jsQuantity == 0 && cQuantity == 0){
        return `please and take any book`;
    }
    const java = javaQuantity * perJavaBookPrice;
    const js = jsQuantity * perJsBookPrice;
    const c = cQuantity * perCBookPrice;
    const totalBookPrice =`MY Total Books Price: ${java + js + c} TK`;
    return totalBookPrice;
}

// function calling 
const myPrice = findBookPrice(javaProgramming,jsProgramming,cProgramming);
console.log(myPrice);