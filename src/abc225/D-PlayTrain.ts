import {readFileSync} from "fs"

const args: string[] = readFileSync('/dev/stdin', 'utf8').trim().split('\n')
const [n, q]: number[] = args[0].split(' ').map(Number)
const query: number[][] = args.slice(1).map((r: string) => r.split(' ').map(Number))

const init = (n: number): number[][] => {
    const a: number[][] = []
    for (let i = 0; i < n; i++) {
        a.push([i + 1, 0, 0])
    }
    return a
}
const trains = init(n)
const chainToTop = (train: number[]): number => {
    if (train[1] === 0) {
        return train[0]
    }
    return chainToTop(trains[train[1] - 1])
}
const chainToTop2 = (train: number[]): number => {

    if (train[1] === 0) return train[0]

    let prevTrain: number = train[1]
    let currentTrain: number = 0
    while (prevTrain !== 0) {
        currentTrain = trains[prevTrain - 1][0]
        prevTrain = trains[prevTrain - 1][1]
    }
    return currentTrain
}

const outPutTrains = (train: number[], trainStr: string): string => {
    const nextTrainStr: string = trainStr + ' ' + train[0].toString()
    if (train[2] !== 0) {
        return outPutTrains(trains[train[2] - 1], nextTrainStr)
    }
    return nextTrainStr
}

const outPutTrains2 = (train: number[]): string => {

    let trainStr: string = train[0].toString()
    let nextTrain: number = train[2]
    while (nextTrain !== 0) {
        trainStr = trainStr + ' ' + trains[nextTrain - 1][0].toString()
        nextTrain = trains[nextTrain - 1][2]
    }

    return trainStr
}

const main = (query: number[][]): void => {
    for (let i = 0; i < query.length; i++) {
        const [q, x, y]: number[] = query[i]
        // console.log(q,x,y)
        if (q === 1) {
            trains[x - 1][2] = y
            trains[y - 1][1] = x
        } else if (q === 2) {
            trains[x - 1][2] = 0
            trains[y - 1][1] = 0
        } else if (q === 3) {
            const topTrain: number = chainToTop2(trains[x - 1])
            const trainStr = outPutTrains2(trains[topTrain - 1])
            process.stdout.write((trainStr.split(' ').length).toString())
            console.log(' ' + trainStr)
        }
    }
}
main(query)
