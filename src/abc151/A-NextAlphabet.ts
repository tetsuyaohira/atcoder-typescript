import * as fs from 'fs'

const c :string = fs.readFileSync('/dev/stdin','utf8');
// in:a
// out:b
console.log(String.fromCharCode(c.charCodeAt(0) + 1))
