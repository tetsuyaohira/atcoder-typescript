import {readFileSync} from 'fs'

const args = readFileSync('/dev/stdin', 'utf8').trim().split('\n')

const N:number = Number(args[0])
const L = args.slice(1)
const set = new Set(L)
console.log(set.size)