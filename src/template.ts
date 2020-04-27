import * as fs from 'fs';

namespace AtCoder.abc001 {

    interface Task {
        args: string[][];

        main(this: Task): void;
    }

    export class TaskA implements Task {

        constructor(public readonly args: string[][]) {
        }

        /**
         *
         *
         */
        main(this: Task): void {

            console.log(this.args[0])
        }
    }
}

const args: string[][] = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n').map(r => r.split(' '));
const prg: AtCoder.abc001.TaskA = new AtCoder.abc001.TaskA(args);
prg.main();
