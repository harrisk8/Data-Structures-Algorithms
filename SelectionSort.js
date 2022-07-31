
function findSmallest(array) {
    let smallest = array[0];
    let smallestIdx = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] < smallest) {
            smallest = array[i];
            smallestIdx = i;
        }
    }

    return [smallest, smallestIdx];
}

function selectionSort(array) {
    let sortedArray = [];

    for (let i = 0; i < array.length; i++) {
        let smallest = findSmallest(array)[0];
        sortedArray.push(smallest);
        array.pop(findSmallest(array)[1], 1);
    }
    return sortedArray;
}

let array = [2, 5, 2, 9, 5, 6, 3, 8, 5];

console.log(selectionSort(array));