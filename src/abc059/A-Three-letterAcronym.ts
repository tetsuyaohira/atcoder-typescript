import * as fs from 'fs';

const [s1, s2, s3]: string[] = fs.readFileSync('/dev/stdin', 'utf8').trim().split(' ');

const ans: string = s1.substring(0, 1).toUpperCase() + s2.substring(0, 1).toUpperCase() + s3.substring(0, 1).toUpperCase();
console.log(ans);

