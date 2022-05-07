import {readFileSync} from 'fs';

const [s, t]: string[] = readFileSync('/dev/stdin', 'utf8').trim().split('\n');

const func = function (s: string, t: string) {
    if (s === t) {
        return true;
    } else {

        for (let i = 0; i < s.length - 1; i++) {
            const front = s.split('')[i];
            const back = s.split('')[i + 1];

            const frontWords = s.slice(0, i);
            const backWords = s.slice(i + 2, s.length);

            const changed = frontWords + back + front + backWords;
            if (changed === t) {
                return true;
            }
        }
    }
    return false;
}

console.log(func(s,t)?'Yes':'No');
