import {readFileSync} from "fs"

const input = readFileSync(0, "utf8").trim().split("\n")

const n: number = +input[0]
const a: number[] = input[1].split(" ").map(Number)

