import {readFileSync} from "fs";

const args: string = readFileSync('/dev/stdin', 'utf-8').trim();

const [x, y]: string[] = args.split('.');

if (+y >= 0 && +y <= 2) {
    console.log(x + '-');
} else if (+y >= 3 && +y <= 6) {
    console.log(x);
} else {
    console.log(x + '+');
}
