import {readFileSync} from "fs";
import * as events from "events";

const [s, t]: string[] = readFileSync('/dev/stdin', 'utf8').trim().split(' ');

const eventEmitter = new events.EventEmitter();
eventEmitter
    .on('Yes', () => console.log('Yes'))
    .on('No', () => console.log('No'));

(s < t) ? eventEmitter.emit('Yes') : eventEmitter.emit('No');
