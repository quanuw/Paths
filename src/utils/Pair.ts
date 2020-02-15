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

    setWeight(weight: number) {
        this.weight = weight;
    }

    toString(): string {
        return "node: " + this.node.name +  ", " + "weight: " + this.weight;
    }
}

export { Pair };