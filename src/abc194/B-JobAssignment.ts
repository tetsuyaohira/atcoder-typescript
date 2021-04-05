import {readFileSync} from 'fs';

const args: string[] = readFileSync('/dev/stdin', 'utf8').trim().split('\n');

let ans: number = Infinity;
for (let i: number = 1; i < args.length; i++) {
    for (let j: number = 1; j < args.length; j++) {
        const a: number = parseInt(args[i].split(' ')[0], 10);
        const b: number = parseInt(args[j].split(' ')[1], 10);

        if (i === j) {
            ans = Math.min(ans, a + b)
        } else {
            ans = Math.min(ans, Math.max(a, b))
        }
    }
}
console.log(ans);
