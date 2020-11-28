import * as fs from 'fs';

const getArgs = () => {
    const args: string = fs.readFileSync('/dev/stdin', 'utf8').trim();
    return Promise.resolve(args);
};
const vowelOrConsonant = (word: string): string => {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    return (vowels.indexOf(word) >= 0) ? 'vowel' : 'consonant';
}
const output = (val: string): void => console.log(val);

getArgs().then((args: string) => {
    return vowelOrConsonant(args)
}).then((val: string) => {
    return output(val);
});
