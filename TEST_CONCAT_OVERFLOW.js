const largeBuffer = Buffer.alloc(2 ** 32 + 5)
largeBuffer.fill(111)

const result = Buffer.concat([largeBuffer])
console.log(result); // 6f 6f 6f 6f 6f 00 00 00 ...
                     // 1  2  3  4  5
