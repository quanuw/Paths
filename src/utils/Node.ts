import { Edge } from "./Edge";

class Node {
    name: string;
    neighbors: Array<Edge>|null;

    constructor(name: string, neighbors: Array<Edge>|null) {
        this.name = name;
        this.neighbors = neighbors;
    }

    getNeighbors(): Array<Edge> {
        return Object.assign([], this.neighbors);
    }

    setNeighbors(neighbors: Array<Edge>): void {
        if (this.neighbors == null) {
            this.neighbors = neighbors;
        }
    }
}

export { Node }
