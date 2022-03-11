import {readFileSync} from "fs";

const x = +readFileSync('/dev/stdin', 'utf8').trim();

if (x >= 0 && x < 40) {
    console.log(40 - x);
}
if (x >= 40 && x < 70) {
    console.log(70 - x);

}
if (x >= 70 && x < 90) {
    console.log(90 - x);
}
if (x >= 90) {
    console.log('expert');
}
