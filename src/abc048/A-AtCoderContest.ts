import * as fs from 'fs';

const [s1, s2, s3]: string[] = fs.readFileSync('/dev/stdin', 'utf8').trim().split(' ');
console.log(s1.substring(0, 1) + s2.substring(0, 1) + s3.substring(0, 1));
