import * as fs from 'fs';

const s: string = fs.readFileSync('/dev/stdin', 'utf8').trim();
const noMatch = s.split('').some((value: string, index: number) => {
        if (index % 2 === 0) {
            // 奇数　小文字
            if (value >= 'A' && value <= 'Z') {
                return true;
            }
        } else {
            // 偶数　大文字
            if (value >= 'a' && value <= 'z') {
                return true;
            }
        }
    }
);
console.log(noMatch ? 'No' : 'Yes');