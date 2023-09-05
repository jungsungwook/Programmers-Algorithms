let zero = 0;
let one = 0;

function solution(arr) {
    quart(arr)
    return [zero, one];
}

function quart(arr) {
    if (arr.length == 1) {
        if (arr[0] == 0) zero++;
        else one++;
        return arr;
    }
    arr_type = isBinaryMatrix(arr);
    if (arr_type[0]) {
        if (arr_type[1] == 0) zero++;
        else one++;
        return;
    }
    const half = arr.length / 2;
    let arr1 = [],
        arr2 = [],
        arr3 = [],
        arr4 = [];
    // 4분할
    for (let i = 0; i < half; i++) {
        const next = Number(i + arr.length / 2);
        arr1.push(arr[i].slice(0, half));
        arr2.push(arr[i].slice(half, arr.length));
        arr3.push(arr[next].slice(0, half));
        arr4.push(arr[next].slice(half, arr.length));
    }

    arr1 = quart(arr1);
    arr2 = quart(arr2);
    arr3 = quart(arr3);
    arr4 = quart(arr4);
}

function isBinaryMatrix(arr) {
    const type = arr[0][0]
    let o = 0;
    let z = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] === 0) {
                z++;
            } else if (arr[i][j] === 1) {
                o++;
            }
        }
    }
    if (o > 0 && z > 0) return [false, undefined];
    else return [true, type];
}
