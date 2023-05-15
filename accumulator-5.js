let array = [3,4,-1,-5,-6,5,6,2,1,7];
let accumulatorEven = [];

for (let i = 0; i < array.length; i++) {
    if(array[i] % 2 === 0) {
        accumulatorEven.push(array[i])
    }    
}
console.log(accumulatorEven);