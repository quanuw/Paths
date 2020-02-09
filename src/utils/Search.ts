import { Graph } from "./Graph";
import { Node } from "./Node";
import { PriorityQueue } from "./PriorityQueue";
import { Pair } from "./Pair";

class Search {
    SEARCH_METHODS = {
        "djikstra": this.djikstra,
        "astar": null
    };

    djikstra(graph: Graph, source: Node): any {
        let pq = new PriorityQueue();
        let dist  = new Map<Node, number>();
        let prev = new Map<Node, Node|null>();
        dist.set(source, 0);
        graph.getNodes.forEach(
            function(node) {
                if (node !== source) {
                    dist.set(node, Infinity);
                    prev.set(node, null);
                }
                pq.insert(new Pair(Infinity, node));
            }
        )
        pq.insert(new Pair(0, source));
    
        while (!pq.isEmpty()) {
            console.log(pq);
            let pair = pq.remove();
            pair.getNode.getNeighbors().forEach(
                function(edge) {
                    let alt = dist.get(edge.getStart)! + edge.getWeight;
                    if (alt < dist.get(edge.getEnd)!) {
                        // TODO: decrease key in pq?
                        dist.set(edge.getEnd, alt);
                        prev.set(edge.getEnd, edge.getStart);
                        pq.decreaseKey(edge.getEnd, alt);
                    }
                }
            )
        }


        return {
            dist: dist,
            prev: prev
        };

    }
}

export { Search };