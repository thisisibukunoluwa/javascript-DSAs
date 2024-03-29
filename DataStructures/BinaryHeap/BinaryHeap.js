

class MaxBinaryHeap {
    constructor(){
        this.values = []
    } 
    insert(element){
        this.values.push(element)
        this.bubbleUp()
    } 
    //My Attempt 
    //  bubbleUp() {
    //     let index = this.values.length - 1
    //     let parentIndex = Math.floor(index-1)/2
    //     while(this.values[parentIndex] < this.values[index]) {
    //         [this.values[parentIndex], this.values[index]] = [this.values[index],this.values[parentIndex],];
    //         index--
    //     }
    // }
    bubbleUp() {
        let idx = this.values.length - 1
        const element = this.values[idx]
        while (idx > 0 ) {
            let parentIdx = Math.floor(idx - 1) / 2
            let parent = this.values[parentIdx]
            if (element <= parent) break;
            this.values[parentIdx] = element
            this.values[idx] = parent 
            idx = parentIdx 
        }
    }
    extractMax() {
        const max = this.values[0]
        const end = this.values.pop()
       if (this.values.length > 0 ) {
         this.values[0] = end;
         this.sinkDown();
        }
        return max; 
    }
    sinkDown() {
        let idx = 0 
        const length = this.values.length
        const element = this.values[0]
        while(true) {
            let leftChildIdx = 2 * idx + 1 ;
            let rightChildIdx = 2 * idx + 2 ;
            let leftChild,rightChild
            let swap = null
            if (leftChildIdx < length) {
                leftChild = this.values[leftChildIdx]
                if(leftChild > element) {
                    swap = leftChildIdx
                }
            }
            if (rightChildIdx < length) {
                rightChild = this.values[rightChildIdx]
                if((swap === null && rightChild > element) || (swap !== null && rightChild > leftChild)) {
                    swap = rightChildIdx
                }
            }
            if (swap === null) break 
            this.values[idx] = thisvalues[swap]
            this.values[swap] = element 
            idx = swap 
        }
    }
}

let heap = new MaxBinaryHeap()

heap.insert(41)
heap.insert(39)
heap.insert(33)
heap.insert(18)
heap.insert(27)
heap.insert(12)
heap.insert(55)

// console.log(heap)
console.log(heap.extractMax())


class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue (val,priority) {
    let newNode = new node(val,priority)
    this.values.push(newNode);
    this.bubbleUp();
  }
  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2)
      let parent = this.values[parentIdx];
      if (element.priority >= parent.priority) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }
  dequeue () {
    const min = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return min;
  }
  sinkDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];
    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;
      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild.priority < element.priority) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild.priority < element.priority) ||
          (swap !== null && rightChild.priority < leftChild.priority)
        ) {
          swap = rightChildIdx;
        }
      }
      if (swap === null) break;
      this.values[idx] = thisvalues[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }
}


class node {
    constructor(val,priority) {
        this.val = val
        this.priority = priority
        // this.insertTime = Date.now()
    }
}


let ER = new PriorityQueue()
ER.enqueue('common cold', 5)
ER.enqueue('gunshot wound', 1)
ER.enqueue('high fever', 4)
ER.enqueue('broken arm', 2)
ER.enqueue('glass in foot', 3)

console.log(ER)

