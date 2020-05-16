import * as fs from 'fs';

namespace AtCoder {
    export interface Paramable {
        readonly args: string[][];
    }

    export interface Task {
        main(this: Task): void;
    }
}

namespace AtCoder.abc167 {
    export class TaskA implements AtCoder.Task, AtCoder.Paramable {

        public constructor(public readonly args: string[][]) {

        }

        public main(this: TaskA): void {
            const s:string = this.args[0][0];
            const t:string = this.args[1][0];
            if (s === t.substring(0,s.length)) {
                console.log('Yes');
            } else {
                console.log('No');
            }

        }
    }

    const args: string[][] = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n').map(x => x.split(' '));
    const task: AtCoder.Task = new TaskA(args);
    task.main();
}