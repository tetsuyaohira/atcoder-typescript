import {readFileSync} from 'fs';

const [a, b]: number[] = readFileSync('/dev/stdin', 'utf8').trim().split(' ').map(Number);

// 乳固形分が15パーセント以上、乳脂肪分が8パーセント以上含まれるものを「アイスクリーム」とする。
// 上に当てはまらず、乳固形分が10パーセント以上、乳脂肪分が3パーセント以上含まれるものを「アイスミルク」とする。
// 上のいずれにも当てはまらず、乳固形分が3 パーセント以上含まれるものを「ラクトアイス」とする。
// 上のいずれにも当てはまらないものを「氷菓」とする。

if (a + b >= 15 && b >= 8) {
    console.log(1);
} else if (a + b >= 10 && b >= 3) {
    console.log(2);
} else if (a + b >= 3) {
    console.log(3);
} else {
    console.log(4);
}
