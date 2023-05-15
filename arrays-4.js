const array = ['js','php','C#','C++','Python','Java','Ruby','Swift','Go','Perl','TypeScript'];

for (let index = 0; index < array.length; index++) {
    while (array[index].length > 3) {
        console.log(array[index]);
        break
    }
    
}