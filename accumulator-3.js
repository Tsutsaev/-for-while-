const array = ['one','two','three','four','five','six','seven','eigth','nine','ten'];
const accumulator = [];
let i = 0;
while(i < array.length) {
    if(array[i].length > 3) {
        accumulator.push(array[i])

    }
    i++
}
console.log(accumulator);