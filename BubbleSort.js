function sortArray(array) {

    for (i = 0; i < array.length - 1; i++) {
        
        let j = i + 1;

        while (j < array.length) {
            
            if (array[i] > array[j]) { 

                swap(i, j, array);
    
            }

            j++;
        }


    }

    return array;


}

function swap(i, j, array) {

    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;


}

let array = [4, 1, 6, 7, 8, 9, 2, 6, 7, 8];
console.log(sortArray(array));
