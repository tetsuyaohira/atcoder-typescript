import * as fs from 'fs';

//in
//
//out
//
const main = (inp: string) => {
    const weather: { [s: string]: string } = {
        Sunny: 'Cloudy',
        Cloudy: 'Rainy',
        Rainy: 'Sunny'
    };

    console.log(weather[inp]);

};

main(fs.readFileSync('/dev/stdin', 'utf8').trim());