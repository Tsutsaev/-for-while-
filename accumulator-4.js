const names = ['raasul','abubakar','abdullah','magomed','abdurahman','saad','hamzat','islam','name1','name2','adam'];
let accumulator  = [];
for(let i = 0; i < names.length; i++) {
    if(names[i][0] === 'a') {
        accumulator.push(names[i])
    }
}
console.log(accumulator);