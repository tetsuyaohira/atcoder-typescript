import * as fs from 'fs';

namespace AtCoder {
    export interface Paramable {
        readonly args: string[][];
    }

    export interface Task {
        main(this: Task): void;
    }
}

namespace AtCoder.abc091 {
    export class TaskB implements AtCoder.Paramable, AtCoder.Task {
        constructor(readonly args: string[][]) {
        }

        main(this: TaskB): void {
            const n: number = parseInt(this.args[0][0], 10);
            const m: number = parseInt(this.args[n + 1][0], 10);
            const map = new Map;

            for (let i = 0; i < n; i++) {
                const key: string = this.args[i + 1][0];
                if (!map.has(key)) {
                    map.set(key, 0);
                }
                map.set(key, 1 + map.get(key))
            }

            for (let i = 0; i < m; i++) {
                const key: string = this.args[n + i + 2][0];
                if (!map.has(key)) {
                    map.set(key, 0);
                }
                map.set(key, -1 + map.get(key));
            }

            const ans: number = Math.max(...Array.from(map.values()));
            console.log(ans > 0 ? ans : 0);
        }
    }

    const args: string[][] = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n').map(x => x.split(' '));
    const task: AtCoder.Task = new TaskB(args);
    task.main();
}