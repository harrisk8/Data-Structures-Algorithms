function quicksort(array) {

    if (array.length <= 1) return array;

    let pivot = array[0];

    let left = [];
    let right = [];

    for (let i = 1; i < array.length; i++) {
        if (array[i] < pivot) {
            left.push(array[i]);
        } else {
            right.push(array[i]);
        }
    }

    return quicksort(left).concat(pivot, quicksort(right));


}

function swap(i, j, array) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

let array = [1, 5, 6, 3, 8, 1, 12, 5, 6, 7];

console.log(quicksort(array));