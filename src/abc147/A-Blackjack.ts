import * as fs from 'fs'

//in
// 5 7 9
//out
// win
const func = (inp: string) => {
    const [a1, a2, a3]: number[] = inp.split(' ').map(Number);

    if (a1 + a2 + a3 >= 22) {
        console.log('bust');
    } else {
        console.log('win');
    }
};

func(fs.readFileSync('/dev/stdin', 'utf8'));

