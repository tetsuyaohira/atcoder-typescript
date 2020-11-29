import * as fs from 'fs';


async function getArgs() {
    return fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n');
}

async function getK(args: string[]) {
    const [n, k]: number[] = args[0].split(' ').map(Number);
    return k;
}

async function getP(args: string[]) {
    return args[1].split(' ').map(Number);
}

async function getPrice(k:number, p:number[]) {
    const sortedP = p.sort((a: number, b: number) => {
        return a - b
    });

    let ans = 0;
    for (let i: number = 0; i < k; i++) {
        const price: number = Number(sortedP.shift());
        ans += +price;
    }
    return ans;
}

async function main() {
    const args: string[] = await getArgs();
    const kAndP = await Promise.all([getK(args), getP(args)]);
//    const p: number[] = await getP(args);

    const ans: number = await getPrice(kAndP[0], kAndP[1]);
    return ans;
}

main().then((val) => {
    console.log(val);
});

// const args: string[] = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n');
// const [n, k]: number[] = args[0].split(' ').map(Number);
// const p: number[] = args[1].split(' ').map(Number);
//
// const sortedP = p.sort((a: number, b: number) => {
//     return a - b
// });
//
// let ans = 0;
// for (let i: number = 0; i < k; i++) {
//     const price: number = Number(sortedP.shift());
//     ans += +price;
// }
// console.log(ans);
//
//
