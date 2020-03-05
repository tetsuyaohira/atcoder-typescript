export class Program {
    static main(inp: string) {

        console.log(inp);

    }
}

Program.main(require('fs').readFileSync('/dev/stdin', 'utf8').trim());

