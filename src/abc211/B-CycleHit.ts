import {readFileSync} from "fs";

const s: string[] = readFileSync('/dev/stdin', 'utf8').trim().split('\n');

// H , 2B , 3B , HR
if (s.filter(word => word === 'H').length === 1
    && s.filter(word => word === '2B').length === 1
    && s.filter(word => word === '3B').length === 1
    && s.filter(word => word === 'HR').length === 1) {
    console.log('Yes');
} else {
    console.log('No');
}
