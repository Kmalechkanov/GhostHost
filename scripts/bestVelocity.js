function calculate(arr) {
    if (arr.length <= 3) {
        return { sequence: arr, sum: arr.reduce((a,x)=> a+x)}
    }

    let bestSequenceIndex = 0
    let bestSum = 0

    let sum = arr[0] + arr[1]
    for (let i = 2; i < arr.length; i++) {
        sum += arr[i]

        if (bestSum < sum) {
            bestSum = sum
            bestSequenceIndex = i - 2
        }

        sum -= arr[i - 2]
    }

    let sequence = arr.slice(bestSequenceIndex, bestSequenceIndex + 3)
    return { sequence, sum: bestSum }
}

function test(params) {
    let result = calculate(params)
    // let result = calculate1(params)
    console.log(result)
}

test([11, 14]) // { sequence: [ 11, 14 ], sum: 25 }
test([11, 14, 10, 12]) // { sequence: [ 14, 10, 12 ], sum: 36 }
test([17, 14, 10, 12, 5]) // { sequence: [ 17, 14, 10 ], sum: 41 }
test([9, 14, 16, 12, 58]) // { sequence: [ 16, 12, 58 ], sum: 86 }

function calculate1(arr) {
    if (arr.length <= 3) {
        return arr
    }

    let bestSequenceIndex = 0
    let bestSum = 0
    for (let i = 0; i < arr.length - 2; i++) {
        let sum = 0;
        for (let j = 0; j < 3; j++) {
            sum += arr[i + j]
        }

        if (bestSum < sum) {
            bestSum = sum
            bestSequenceIndex = i
        }
    }

    let sequence = arr.splice(bestSequenceIndex, 3)
    return { sequence, sum: bestSum }
}

