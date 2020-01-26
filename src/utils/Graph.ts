import { Node } from "./Node";

class Graph {
    nodes: Array<Node>;

    constructor(nodes: Array<Node>) {
        this.nodes = nodes;
    }

    get getNodes(): Array<Node> {
        return this.nodes;
    }
}

export { Graph }