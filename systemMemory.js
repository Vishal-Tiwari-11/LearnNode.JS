const os= require('os');

var totalMemo= os.totalmem();
var freeMemo= os.freemem();
var usedMemo= totalMemo-freeMemo

console.log(`Total Memory: ${totalMemo}`);
console.log(`Free Memory: ${freeMemo}`);
console.log(`Used Memory: ${usedMemo}`);
