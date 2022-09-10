import {readFileSync} from "fs"

const x: number = +readFileSync('/dev/stdin', 'utf8').trim()
console.log(Math.round(x))