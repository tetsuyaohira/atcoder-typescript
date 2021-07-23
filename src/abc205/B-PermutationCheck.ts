import {readFileSync} from 'fs';

const args: string[] = readFileSync('/dev/stdin', 'utf8').trim().split('\n');

const a: number[] = args[1].split(' ').map(Number);

a.sort((a, b) => a - b);

const ans :boolean = a.every((value, index, array) => {
    //console.log(`${value} ${index}`);
    return (value === index+1);
})

console.log((ans)?'Yes':'No');