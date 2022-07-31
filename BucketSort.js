function bucketSort(array, k) {
    let n = array.length;
    let bucket = new Array(n + 1);
    let counts = {};
    let result = [];

    //Create hashmap -  map elements in array to counts
    for (let i = 0; i < bucket.length; i++) {
        if (isNaN(counts[array[i]])) {
            counts[array[i]] = 1;
        } else {
            counts[array[i]] += 1;
        }
    }

    //Create empty arrays that will later store the elements which hold a specific count
    for (let i = 0; i < bucket.length; i++) {
        bucket[i] = [];
    }

    console.log(bucket)
    console.log(counts);

    for (count of (Object.keys(counts))) {
        console.log(bucket[counts[count]])
        bucket[counts[count]].push(count);
    }

    for (let i = 0; i < n; i++) {
        let bucketIndex = Math.floor(array[i]) * n;

    }

    for (let i = bucket.length - 1; i >= 0; i--) {
        console.log(bucket[i])
        if (result.length > k) break;
        for (element of bucket[i]) {
            if (result.length < k) result.push(element);
        }
    }
    console.log(result);
    return result;
}

const array = [1];

console.log(bucketSort(array, 1));