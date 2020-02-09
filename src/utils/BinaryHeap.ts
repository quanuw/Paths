import { Node } from "./Node";
import { Pair } from "./Pair";

class BinaryHeap {
    private pairs: Array<Pair>;

    constructor() {
        const dummyNode = new Node("dummyNode", []);
        const dummyPair = new Pair(0, dummyNode);
        this.pairs = [dummyPair];
    }

    get size(): number {
        return this.pairs.length - 1;
    }

    get getPairs(): Array<Pair> {
        return this.pairs;
    }

    buildHeap(a: Array<Pair>): void {
        let i = Math.floor(a.length / 2);
        this.pairs = [...this.pairs, ...a];
        while (i > 0) {
            this.percolateDown(i);
            i = i - 1;
        }
    }

    peroclateUp(): void {
        let i = this.size;
        let parentIndex = Math.floor(i / 2);
        while (parentIndex > 0) {
            if (this.pairs[i] < this.pairs[parentIndex]) {
                let tmp = this.pairs[parentIndex];
                this.pairs[parentIndex] = this.pairs[i];
                this.pairs[i] = tmp;
            }
            i = parentIndex;
        }
    }

    insert(pair: Pair): void {
        this.pairs.push(pair);
        this.peroclateUp();
    }

    percolateDown(i: number): void {
        while ((i * 2) <= this.size) {
            let mc = this.minChild(i);
            console.log(mc);
            console.log(i);
            console.log(this.size);
            if (this.pairs[i].getWeight > this.pairs[mc].getWeight) {
                let tmp = this.pairs[i];
                this.pairs[i] = this.pairs[mc];
                this.pairs[mc] = tmp;
            }
            i = mc;
        }
    }

    minChild(i: number): number {
        let rightChild = i * 2 + 1;
        let leftChild = i * 2;
        if (rightChild > this.size) {
            return leftChild;
        } else if (this.pairs[leftChild].getWeight < this.pairs[rightChild].getWeight) {
            return leftChild
        } else {
            return rightChild;
        }
    }

    deleteMin(): Pair {
        if (this.size > 0) {
            let res = this.pairs[1];
            this.pairs[1] = this.pairs[this.size];
            this.pairs.pop();
            this.percolateDown(1);
            return res;
        } else {
            throw new Error("NoSuchElementException");
        }
    }

    getMin(): Pair {
        if (this.size >0) {
            let res = Object.assign({}, this.pairs[0]);
            return res;
        } else {
            throw new Error("NoSuchElementException");
        }
    }

    
}

export { BinaryHeap };