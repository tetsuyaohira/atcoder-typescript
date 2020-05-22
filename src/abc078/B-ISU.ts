import * as fs from 'fs';

namespace AtCoder {
    export interface Paramable {
        readonly args: string[][];
    }

    export interface Task {
        main(this: Task): void;
    }
}

namespace AtCoder.abc001 {
    export class TaskA implements AtCoder.Task, AtCoder.Paramable {
        public constructor(public readonly args: string[][]) {
        }

        public main(this: TaskA): void {
            const [x, y, z]: number[] = this.args[0].map(Number);


            let ans: number = 0;
            let n: number = x;
            while (n > 0 || n > y) {

                if (ans === 0) {
                    if (n >= y + z + z) {
                        ans++;
                        n = n - y + z + z;
                    }
                } else {
                    if (n >= y + z) {
                        ans++
                        n = n - y + z;
                    }
                }
            }
            console.log(ans);
        }
    }

    const args: string[][] = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n').map(r => r.split(' '));
    const task: AtCoder.Task = new TaskA(args);
    task.main();
}

