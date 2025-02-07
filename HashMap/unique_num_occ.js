/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    // set map for occurance 
    // [num, occurance]
    let occur = new Map();
    for (const num of arr) {
        if (occur.has(num)) {
            occur.set(num, occur.get(num) + 1);
        } else {
            occur.set(num, 1);
        }
    }

    // check whether occurance is unique
    let uniqueOccur = new Set();
    for (const [key, value] of occur.entries()) {
        if (uniqueOccur.has(value)) {
            return false;
        } else {
            uniqueOccur.add(value);
        }
    }
    
    return true;
};

function testUniqueOccurrences(input, expected) {
    const result = uniqueOccurrences(input);
    const passed = result === expected;
    const color = passed ? '\x1b[32m' : '\x1b[31m'; // Green for true, Red for false
    console.log(`Input: ${JSON.stringify(input)} | Output: ${result} | Expected: ${expected} | Passed: ${color}${passed}\x1b[0m`);
}

testUniqueOccurrences([1,2,2,1,1,3], true);
testUniqueOccurrences([1,2], false);
testUniqueOccurrences([-3,0,1,-3,1,1,1,-3,10,0], true);
