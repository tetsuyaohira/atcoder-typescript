import {readFileSync} from "fs";

const x: string[] = readFileSync('/dev/stdin', 'utf8').trim().split('');
const isSame: boolean = x[0] === x[1] && x[1] === x[2] && x[2] === x[3];
const isCountUp: boolean = x.every((value: string, index: number) => {
    if (index === 3) return true;
    if ((parseInt(value, 10) + 1)%10 === parseInt(x[index + 1], 10)) return true;
    return false;
});

if (isSame || isCountUp) {
    console.log('Weak');
} else {
    console.log('Strong');
}
