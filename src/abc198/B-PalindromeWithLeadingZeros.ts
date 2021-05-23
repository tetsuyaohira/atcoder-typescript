import {readFileSync} from 'fs';

const n: string = readFileSync('/dev/stdin', 'utf8').trim();

main(n);

function main(n: string) {

    if (n.length <= 1) {
        console.log('Yes');
        return;
    }

    if (checkPalindrome(n)) {
        console.log('Yes');
        return;
    }

    let wk: string = n;
    for (let i = 0; i < n.length; i++) {
        wk = '0' + wk;
        // 回文チェック
        if (checkPalindrome(wk)) {
            console.log('Yes');
            return;
        }
    }
    console.log('No');
}


function checkPalindrome(word: string): boolean {
    for (let i = 0; i < Math.floor(word.length / 2); i++) {
        if (word[i] !== word[word.length - 1 - i]) {
            return false;
        }
    }
    return true;
}
