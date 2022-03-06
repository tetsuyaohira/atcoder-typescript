import {readFileSync} from "fs";
const s: string[] = readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const checks: string[] = ['ABC', 'ARC', 'AGC', 'AHC'];
checks.forEach(check => {
    if (!s.includes(check)) {
        console.log(check);
    }
});

