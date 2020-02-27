import * as fs from 'fs';

//in
// 10
//out
// Yes
const main = (inp: string) => {
    const n :number= parseInt(inp);
    for (let i:number =1; i<10;i++){
        for (let j :number =1;j<10 ;j++){
            if (n === i*j) {
                console.log('Yes');
                return;
            }
        }
    }

    console.log('No');

};

main(fs.readFileSync('/dev/stdin', 'utf8').trim());