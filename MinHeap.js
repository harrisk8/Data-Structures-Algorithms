class MinHeap {

    constructor(capacity) {
        this.minHeap = [];
        this.capacity = capacity
    }

    insert(value) {
        this.minHeap.push(value);
        this.bubbleUp(this.minHeap.length  - 1);
        if (this.minHeap.length > this.capacity) this.remove();
    }

    //New elements are inserted into the END of the heap, then they bubble-up to their correct position via this method.
    bubbleUp(index) {
        const parent = Math.floor((index - 1)/2);
        let max = index;

        //If the parent value is GREATER than the newly inserted value
        if (parent >= 0 && this.minHeap[parent] > this.minHeap[index]) max = parent;

        if (max !== index) {
            this.swap(index, max);
            this.bubbleUp(max);
        }
    }

    remove() {
        this.swap(0, this.minHeap.length - 1);
        const min = this.minHeap.pop();
        this.trickleDown(0);
        return min;
    }

    trickleDown(index) {
        const leftChild = (2 * index) + 1;
        const rightChild = (2 * index) + 2;
        let min = index;

        if (leftChild < this.minHeap.length && this.minHeap[leftChild] < this.minHeap[min]) min = leftChild;
        if (rightChild < this.minHeap.length && this.minHeap[rightChild] < this.minHeap[min]) min = rightChild;

        if (min !== index) {
            this.swap(min, index);
            this.trickleDown(min);
        }

    }

    swap(i, j) {
        let temp = this.minHeap[i];
        this.minHeap[i] = this.minHeap[j];
        this.minHeap[j] = temp;
    }
}

let heap = new MinHeap(5);

for (let i = 0; i < 10; i++) {
    heap.insert(i);
}





console.log(heap);