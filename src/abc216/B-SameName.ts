import {readFileSync} from "fs";
import * as events from "events";

const args: string[] = readFileSync('/dev/stdin', 'utf-8').trim().split('\n');
const n: number = +args[0];

const eventEmitter = new events.EventEmitter();
eventEmitter
    .on('Yes', () => console.log('Yes'))
    .on('No', () => console.log('No'));

check(n, eventEmitter);

async function check(n: number, eventEmitter: any) {
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            if (i === j) continue;
            if (args[i] === args[j]) {
                eventEmitter.emit('Yes');
                return;
            }
        }
    }
    eventEmitter.emit('No');
}

