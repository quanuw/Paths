import { Node } from "./Node";
import { Pair } from "./Pair";

class BinaryHeap {
    private pairs: Array<Pair>;
    private pairIndex: Map<Node, number>;

    constructor() {
        const dummyNode = new Node("dummyNode", []);
        const dummyPair = new Pair(0, dummyNode);
        this.pairs = [dummyPair];
        this.pairIndex = new Map();
        this.pairIndex.set(dummyNode, 0);
    }

    get size(): number {
        return this.pairs.length - 1;
    }

    get getPairs(): Array<Pair> {
        return this.pairs;
    }

    get getPairIndex(): Map<Node, number> {
        return this.pairIndex;
    }

    buildHeap(a: Array<Pair>): void {
        let i = Math.floor(a.length / 2);
        this.pairs = [...this.pairs, ...a];
        while (i > 0) {
            this.percolateDown(i);
            i = i - 1;
        }

        for (i = 1; i < this.size; i++) {
            this.pairIndex.set(this.pairs[i].getNode, i);
        }
    }

    peroclateUp(i: number): void {
        if (i == 1) {
            if (this.pairs[i].getWeight < this.pairs[Math.floor(i / 2)].getWeight) {
                let tmp = this.pairs[Math.floor(i / 2)];
                this.pairIndex.set(this.pairs[i].getNode, Math.floor(i / 2));
                this.pairs[Math.floor(i / 2)] = this.pairs[i];
                this.pairIndex.set(tmp.getNode, i);
                this.pairs[i] = tmp;   
            } else {
                this.pairIndex.set(this.pairs[i].getNode, i);
            }
        } else {
            while (Math.floor(i / 2) > 0) {
                if (this.pairs[i].getWeight < this.pairs[Math.floor(i / 2)].getWeight) {
                    let tmp = this.pairs[Math.floor(i / 2)];
                    this.pairIndex.set(this.pairs[i].getNode, Math.floor(i / 2));
                    this.pairs[Math.floor(i / 2)] = this.pairs[i];
                    this.pairIndex.set(tmp.getNode, i);
                    this.pairs[i] = tmp;   
                } else {
                    this.pairIndex.set(this.pairs[i].getNode, i);
                }
                i = Math.floor(i / 2);
            }
        }
    }

    insert(pair: Pair): void {
        this.pairs.push(pair);
        this.peroclateUp(this.size);
    }

    percolateDown(i: number): void {
        while ((i * 2) <= this.size) {
            let mc = this.minChild(i);
            if (this.pairs[i].getWeight > this.pairs[mc].getWeight) {
                let tmp = this.pairs[i];
                this.pairs[i] = this.pairs[mc];
                this.pairs[mc] = tmp;
                this.pairIndex.set(this.pairs[mc].getNode, i);
                this.pairIndex.set(tmp.getNode, mc);
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
            this.pairs.splice(1, 1);
            this.pairIndex.delete(res.getNode);
            this.percolateDown(1);
            this.updatePairIndex(-1);
            return res;
        } else {
            throw new Error("NoSuchElementException");
        }
    }

    updatePairIndex(shift: number): void {
        this.pairIndex.forEach(function(value, key, map) {
            if (value > 0) {
                map.set(key, value + shift);
            }
        })
    }

    getMin(): Pair {
        if (this.size > 0) {
            // let res = Object.assign({}, this.pairs[1]);
            return this.pairs[1];
        } else {
            throw new Error("NoSuchElementException");
        }
    }

    decreaseKey(item: Node, value: number): void {
        if (this.pairIndex.has(item)) {
            let index = this.pairIndex.get(item)!;
            // decreasing key after deletion is leading to index issues in test2
            if (value < this.pairs[index].getWeight) { // Can only decrease weight
                this.pairs[index].setWeight(value);
                this.peroclateUp(index);
            }
        }
    }


}

export { BinaryHeap };