import { Node } from "./Node";

class Edge {
    private start: Node;
    private end: Node;
    private weight: number;

    constructor(start: Node, end: Node, weight: number) {
        this.start = start;
        this.end = end;
        this.weight = weight;
    }

    get getStart(): Node {
        return this.start;
    }

    get getEnd(): Node {
        return this.end;
    }

    get getWeight(): number {
        return this.weight;
    }
}

export { Edge }