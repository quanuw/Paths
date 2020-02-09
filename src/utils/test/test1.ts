import { Node } from "./../Node";
import { Pair } from "../Pair";
import { BinaryHeap } from "../BinaryHeap";

/* Testing binary heap
*/
let a = new Node("a", []);
let b = new Node("b", []);
let c = new Node("c", []);
let d = new Node("d", []);
let e = new Node("e", []);

let pa = new Pair(13, a);
let pb = new Pair(34, b);
let pc = new Pair(2, c);
let pd = new Pair(89, d);
let pe = new Pair(7, e);

let pairs = [pa, pb, pc, pd, pe];

let bh = new BinaryHeap();

bh.buildHeap(pairs);

console.log(bh.getPairs);
bh.decreaseKey(d, 0);
console.log(bh.getPairs);
console.log(bh.deleteMin());
console.log(bh.deleteMin());
console.log(bh.deleteMin());
console.log(bh.deleteMin());
console.log(bh.deleteMin());
// console.log(bh.deleteMin());