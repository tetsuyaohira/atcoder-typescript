import  * as fs from 'fs';
const [noUse, inp] = fs.readFileSync("/dev/stdin", "utf8").split("\n");

const a: bigint[] = inp.split(" ").map((s: string) => BigInt(s));
if (a.includes(BigInt(0))) {
    console.log(0);
    process.exit(0);
}

let ans: bigint = BigInt(1);
a.forEach((n: bigint) => {
    ans = BigInt(ans) * BigInt(n);
    if (ans > Math.pow(10, 18)) {
        console.log(-1);
        process.exit(0);
    }
});

console.log(ans.toString());
