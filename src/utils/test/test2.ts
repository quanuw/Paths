import { Node } from "./../Node";
import { Pair } from "../Pair";
import { BinaryHeap } from "../BinaryHeap";
import { Graph } from "../Graph";
import { Edge } from "../Edge";
import { Search } from "../Search";

let node1 = new Node("s", null);
let node2 = new Node("a", null);
let node3 = new Node("c", null);
let node4 = new Node("f", null);
let node5 = new Node("b", null);
let node6 = new Node("d", null);
let node7 = new Node("e", null);

let edgeSA = new Edge(node1, node2, 3);
let edgeSC = new Edge(node1, node3, 2);
let edgeSF = new Edge(node1, node4, 6);
let edgeAB = new Edge(node2, node5, 6);
let edgeAD = new Edge(node2, node6, 1);
let edgeCA = new Edge(node3, node2, 2);
let edgeCD = new Edge(node3, node6, 3);
let edgeBE = new Edge(node5, node7, 1);
let edgeDE = new Edge(node6, node7, 4);
let edgeFE = new Edge(node4, node7, 2);

node1.neighbors = [edgeSA, edgeSC, edgeSF];
node2.neighbors = [edgeAB, edgeAD];
node3.neighbors = [edgeCA, edgeCD];
node5.neighbors = [edgeBE];
node6.neighbors = [edgeDE];
node4.neighbors = [edgeFE];
node7.neighbors = [];

let graph = new Graph([
    node1,
    node2,
    node3,
    node4,
    node5,
    node6,
    node7,
]);

let search = new Search();

let res1 = search.djikstra(graph, node1);
let res2 = search.djikstra(graph, node2);
let res3 = search.djikstra(graph, node3);
console.log(res1);
// console.log(res2);
// console.log(res3);





