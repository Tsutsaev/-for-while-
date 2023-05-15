const array = [1,2,3,4,5,6,7,8,9,10];
let accumulator = 0;
for (let index = 0; index < array.length; index++) {
    accumulator += array[index]    
}
console.log(accumulator);