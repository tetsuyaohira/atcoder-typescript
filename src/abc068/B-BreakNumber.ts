import {readFileSync} from 'fs';

async function getArgs(): Promise<number> {
    return parseInt(readFileSync('/dev/stdin', 'utf8').trim(), 10);
}

async function main(): Promise<number> {
    const n: number = await getArgs();
    let maxCnt = -1;
    let ans = 0;
    for (let i = n; i > 0; i--) {
        const cnt: number = await getCnt(i);
        if (maxCnt < cnt) {
            maxCnt = cnt;
            ans = i;
        }
    }
    return ans;
}

async function getCnt(n: number): Promise<number> {
    if (n === 1) return 0;
    let cnt = 0;
    let i = n;
    while (i % 2 === 0) {
        cnt++;
        i /= 2;
    }
    return cnt;
}

main().then((val: number) => console.log(val));
