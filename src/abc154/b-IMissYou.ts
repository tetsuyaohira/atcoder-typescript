import * as fs from 'fs'

function main(args: string) {
    // sardine
    // xxxxxxx
    let result: string = '';
    for (let i: number = 1; i < args.length; i++) {
        result = result + 'x';
    }

    console.log(result);
}

main(fs.readFileSync('/dev/stdin', 'utf8'));
