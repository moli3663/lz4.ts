import { lz4 } from "./lz4";
import { lz4util } from "./lz4util";
import { lz4xxh32 } from "./lz4xxh32";

const hello = "hello world";
console.log(`${hello}`);

let u32: number = lz4util.hashU32(101010);
console.log(`lz4util:${u32}`);
let xxhash=lz4xxh32.hash(0, new Uint8Array(8), 0, 8)
console.log(`xxh32:${xxhash}`);


// let bft = new ArrayBuffer(5);
let data = new Uint8Array(100);
for (let i = 0; i < data.length; i++) {
    data[i] = i > 50 ? 1 : 0;
}

let compressed = lz4.compress(data, data.length);
console.log("compressed:", compressed);
let decompressed = lz4.decompress(compressed);
console.log("decompressed:", decompressed);





