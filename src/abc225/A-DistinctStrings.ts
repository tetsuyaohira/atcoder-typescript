import {readFileSync} from "fs";

const s: string = readFileSync('/dev/stdin', 'utf8').trim();

const set = new Set();

s.split('').forEach(value => {
    set.add(value);
})

const map: any = {
    1: 1,
    2: 3,
    3: 6
};

console.log(map[set.size]);