const array = [1, 2, 3, 4, 5, 67, 8, 9, 10];

for (let index = 0; index < array.length; index++) {
    if (array[index] % 2 == 0) {
        console.log(array[index]);
    }
    while(array[index] % 2 !== 0) {
        console.log(array[index]);
        break
    }
}