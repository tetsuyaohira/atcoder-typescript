import {readFileSync} from "fs";

const args: string[] = readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const points: number[] = args[1].split(' ').map(Number);
const sortedPoints: number[] = [...points];
sortedPoints.sort((a: number, b: number) => a - b);

const boobyVal = sortedPoints[sortedPoints.length - 2];
const ans = points.findIndex((value) => {
    if (value === boobyVal) return true;
}) + 1

console.log(ans);
