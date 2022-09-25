import {readFileSync} from 'fs'

const input = readFileSync('/dev/stdin', 'utf8').trim().split('\n')

const X = input[0]
const N: number = +input[1]
const S: string[] = input.slice(2)
const abc: string[] = 'abcdefghijklmnopqrstuvwxyz'.split('')

const convertedS: string[] = S.map(s => {
    const arrayS = s.split('')
    const convertedArray = arrayS.map(word => {
        const index = X.indexOf(word)
        return abc[index]
    })
    return convertedArray.join('')
})
convertedS.sort()

const decodedS: string[] = convertedS.map(s => {
    const arrayS = s.split('')
    const decodedArray = arrayS.map(word => {
        const index = abc.indexOf(word)
        return X[index]
    })
    return decodedArray.join('')
})

decodedS.forEach(s => console.log(s))
