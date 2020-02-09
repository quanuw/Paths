import { Graph } from "./Graph";
import { Node } from "./Node";
import { PriorityQueue } from "./PriorityQueue";
import { Pair } from "./Pair";

class Search {
    SEARCH_METHODS = new Set([
        "djikstra",
        "astar"
    ]);

    search(method: string, graph: Graph, source: Node): Array<Node> {
        if (!this.SEARCH_METHODS.has(method)) {
            throw new Error("IllegalArgumentException");
        } else {
            return [];
        }
    }

    private djikstra(graph: Graph, source: Node): Map<Node, number> {
        let pq = new PriorityQueue();
        let dist  = new Map<Node, number>();
        dist.set(source, 0);

        graph.getNodes.forEach(
            function(node) {
                if (node !== source) {
                    dist.set(node, Infinity);
                }
                pq.insert(new Pair(Infinity, node));
            }
        )

        pq.insert(new Pair(0, source));

        while (!pq.isEmpty()) {
            let pair = pq.remove();
            pair.getNode.getNeighbors().forEach(
                function(edge) {
                    let alt = dist.get(edge.getStart)! + edge.getWeight;
                    if (alt < dist.get(edge.getEnd)!) {
                        dist.set(edge.getEnd, alt);
                    }
                }
            )
        }


        return dist;
    }
}