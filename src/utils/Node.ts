import { Edge } from "./Edge";

class Node {
    name: string;
    neighbors: Array<Edge>;

    constructor(name: string, neighbors: Array<Edge>) {
        this.name = name;
        this.neighbors = neighbors;
    }

    get getNeighbors(): Array<Edge> {
        return Object.assign([], this.neighbors);
    }
}

export { Node }
