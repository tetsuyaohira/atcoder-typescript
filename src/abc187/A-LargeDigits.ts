import * as fs from 'fs';

const args: string = fs.readFileSync('/dev/stdin', 'utf8').trim();
const a: string = args.split(' ')[0];
const b: string = args.split(' ')[1];

function mySum(str:string) {
    return str.split('').reduce((previousValue,currentValue) => {
        return previousValue + parseInt(currentValue, 10)
    },0);
}

const aSum: number = mySum(a);
const bSum: number = mySum(b);

if (aSum > bSum) {
    console.log(aSum);
} else {
    console.log(bSum);
}



