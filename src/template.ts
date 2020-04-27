import * as fs from 'fs';

namespace AtCoder {
    export interface Task {
        readonly args: string[][];

        main(this: Task): void;
    }
}

namespace AtCoder.abc001 {
    export class TaskA implements AtCoder.Task {
        constructor(public readonly args: string[][]) {
        }

        main(this: AtCoder.Task): void {
        }
    }
}

const args: string[][] = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n').map(r => r.split(' '));
const prg: AtCoder.abc001.TaskA = new AtCoder.abc001.TaskA(args);
prg.main();
