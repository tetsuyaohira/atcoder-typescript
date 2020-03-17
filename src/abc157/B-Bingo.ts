import * as fs from 'fs';

//in
// 60 88 34
// 92 41 43
// 65 73 48
// 10
// 60
// 43
// 88
// 11
// 48
// 73
// 65
// 41
// 92
// 34
//out
// Yes
const main = (inp: string) => {
    let inpList: string[] = inp.split('\n');

    let a1: number[] = inpList[0].split(' ').map(Number);
    let a2: number[] = inpList[1].split(' ').map(Number);
    let a3: number[] = inpList[2].split(' ').map(Number);

    inpList.shift();
    inpList.shift();
    inpList.shift();

    const n: number = parseInt(inpList[0]);

    inpList.shift();

    for (let i: number = 0; i < n; i++) {
        if (a1[0] === parseInt(inpList[i])) {
            a1[0] = 0;
        }
        if (a1[1] === parseInt(inpList[i])) {
            a1[1] = 0;
        }
        if (a1[2] === parseInt(inpList[i])) {
            a1[2] = 0;
        }
        if (a2[0] === parseInt(inpList[i])) {
            a2[0] = 0;
        }
        if (a2[1] === parseInt(inpList[i])) {
            a2[1] = 0;
        }
        if (a2[2] === parseInt(inpList[i])) {
            a2[2] = 0;
        }
        if (a3[0] === parseInt(inpList[i])) {
            a3[0] = 0;
        }
        if (a3[1] === parseInt(inpList[i])) {
            a3[1] = 0;
        }
        if (a3[2] === parseInt(inpList[i])) {
            a3[2] = 0;
        }
    }

    if (a1[0]===0 && a1[1]===0 && a1[2]===0) {
        console.log('Yes');
        return;
    }
    if (a2[0]===0 && a2[1]===0 && a2[2]===0) {
        console.log('Yes');
        return;
    }
    if (a3[0]===0 && a3[1]===0 && a3[2]===0) {
        console.log('Yes');
        return;
    }

    if (a1[0]===0 && a2[0]===0 && a3[0]===0) {
        console.log('Yes');
        return;
    }
    if (a1[1]===0 && a2[1]===0 && a3[1]===0) {
        console.log('Yes');
        return;
    }
    if (a1[2]===0 && a2[2]===0 && a3[2]===0) {
        console.log('Yes');
        return;
    }

    if (a1[0]===0 && a2[1]===0 && a3[2]===0) {
        console.log('Yes');
        return;
    }
    if (a1[2]===0 && a2[1]===0 && a3[0]===0) {
        console.log('Yes');
        return;
    }
    console.log('No');


};

main(fs.readFileSync('/dev/stdin', 'utf8').trim());
