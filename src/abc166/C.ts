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

        // 4 3
        // 1 2 3 4
        // 1 3
        // 2 3
        // 2 4
        public main(this: TaskA): void {
            const [n, m]: number[] = this.args[0].map(Number);
            const heights: number[] = this.args[1].map(Number);

            const road: number[][] = [];
            for (let i = 2; i < m + 2; i++) {
                road.push(this.args[i].map(Number));
            }

            let map = new Map();
            for (let i = 1; i <= n; i++) {
                map.set(i, true);
            }

            for (let i = 0; i < road.length; i++) {
                const road1: number = road[i][0];
                const road2: number = road[i][1];
                const height1: number = heights[road1 - 1];
                const height2: number = heights[road2 - 1];

                if (height1 === height2) {
                    map.set(road1, false);
                    map.set(road2, false);
                }
                if (height1 <= height2) {
                    map.set(road1, false);
                }
                if (height1 >= height2) {
                    map.set(road2, false);
                }
            }

            let ans: number = 0;
           // console.log(map);
            map.forEach((x, y) => {
                // console.log(`${x} ${y}`)
                if (x) ans++
            });

            // for (let i = 0; i < n; i++) {
            //     const myHeight: number = heights[i];
            //     let good: boolean = true;
            //     for (let j = 0; j < road.length; j++) {
            //         if (!road[j].find(x => x === i)) continue;
            //
            //         const height1: number = heights[road[j][0] - 1];
            //         const height2: number = heights[road[j][1] - 1];
            //         const maxHeight: number = Math.max(height1, height2);
            //
            //
            //         if (myHeight < maxHeight) {
            //             good = false;
            //             continue;
            //         }
            //     }
            //     if (good) ans++;
            // }
            console.log(ans);
        }
    }

    const args: string[][] = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n').map(r => r.split(' '));
    const task: AtCoder.Task = new TaskA(args);
    task.main();
}

