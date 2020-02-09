import { BinaryHeap } from "./BinaryHeap";
import { Pair } from "./Pair";

class PriorityQueue {
    private binaryHeap: BinaryHeap;

    constructor() {
        this.binaryHeap = new BinaryHeap();
    }

    insert(item: Pair): void {
        this.binaryHeap.insert(item);
    }

    remove(): Pair {
        return this.binaryHeap.deleteMin();
    }

    element(): Pair {
        return this.binaryHeap.getMin();
    }

    peek(): Pair|null {
        if (this.binaryHeap.size < 1) {
            return null;
        } else {
            return this.binaryHeap.getMin()
        }
    }

    poll(): Pair|null {
        if (this.binaryHeap.size < 1) {
            return null;
        } else {
            return this.binaryHeap.deleteMin();
        }
    }

    // same as insert
    offer(item: Pair): void {
        this.binaryHeap.insert(item);
    }


}

export { PriorityQueue };