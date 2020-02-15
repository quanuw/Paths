import { Graph } from "./Graph";
import { Node } from "./Node";
import { PriorityQueue } from "./PriorityQueue";
import { Pair } from "./Pair";

class Search {
    SEARCH_METHODS = {
        "djikstra": this.djikstra,
        "astar": null
    };

    astar(graph: Graph, source: Node, target: Node, h: Function): any {
        let openSet = new PriorityQueue();

        let cameFrom = new Map<Node, Node>();
        let gScore = new Map<Node, number>();
        graph.getNodes.forEach(node => gScore.set(node, Infinity));
        gScore.set(source, 0);

        let fScore = new Map<Node, number>();
        fScore.set(source, h(source));

        openSet.insert(new Pair(fScore.get(source)!, source));

        while (!openSet.isEmpty()) {
            let current = openSet.peek()!;
            console.log(current);
            if (current.getNode === target) {
                return "Target found!";
            } 

            openSet.remove();
            current.getNode.getNeighbors().forEach(neighbor => {
                let tentativeGScore = gScore.get(current.getNode)! + neighbor.getWeight;
                if (tentativeGScore < gScore.get(neighbor.getEnd)!) {
                    cameFrom.set(neighbor.getEnd, current.getNode);
                    gScore.set(neighbor.getEnd, tentativeGScore);
                    fScore.set(neighbor.getEnd, gScore.get(neighbor.getEnd)! + h(neighbor.getEnd));
                    if (!openSet.contains(neighbor.getEnd)) {
                        openSet.insert(new Pair(fScore.get(neighbor.getEnd)!, neighbor.getEnd));
                    }
                }
            });
        }
        return null;
        
    }

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
            let pair = pq.remove();
            pair.getNode.getNeighbors().forEach(
                function(edge) {
                    let alt = dist.get(edge.getStart)! + edge.getWeight;
                    if (alt < dist.get(edge.getEnd)!) {
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