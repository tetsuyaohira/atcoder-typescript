import * as fs from 'fs';

const main = (inp: string) => {
    const antennas: number[] = inp.split('\n').map(Number);
    const k: number = antennas[5];
    antennas.pop();
    if (antennas[4] - antennas[0] <= k) {
        console.log('Yay!');
    } else {
        console.log(':(');
    }
};

main(fs.readFileSync('/dev/stdin', 'utf8').trim());
