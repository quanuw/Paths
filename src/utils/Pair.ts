import { Node } from "./Node";

class Pair {
    weight: number;
    node: Node;

    constructor(weight: number, node: Node) {
        this.weight = weight;
        this.node = node;
    }

    get getWeight(): number {
        return this.weight;
    }

    get getNode(): Node {
        return this.node;
    }
}

export { Pair };