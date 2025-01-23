/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    let start = 0; 
    let end = 0; 
    let res = 0;
    let count = 0;  // count the zero in window
    while (end < nums.length) {
        if (nums[end] === 0) {
            count++;
        }
        
        while (count > k) {
            if (nums[start] === 0) {
                count--;
            }
            start++;
        }

        res = Math.max(res, (end - start + 1));
        end++;
    }
    return res;
};

function testMaxConsecutiveOnes() {
    const tests = [
        { input: { nums: [1,1,1,0,0,0,1,1,1,1,0], k: 2 }, expected: 6 },
        { input: { nums: [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], k: 3 }, expected: 10 },
        { input: { nums: [1,1,0,0,0,1], k: 1 }, expected: 3 },
        { input: { nums: [0,0,0,0,0,0], k: 2 }, expected: 2 },
        { input: { nums: [1,1,1,1,1], k: 0 }, expected: 5 },
        { input: { nums: [0,1,0,1,0,1,0,1], k: 2 }, expected: 5 },
        { input: { nums: [0,1,0,0,0,1,1,1,1,0], k: 2 }, expected: 6 },
        { input: { nums: [0,0,0,1,0,1,0,1,0,0], k: 1 }, expected: 3 },
    ];

    tests.forEach(({ input: { nums, k }, expected }, index) => {
        const result = longestOnes(nums, k);
        if (result === expected) {
            console.log(`Test ${index + 1}: PASSED`);
        } else {
            console.error(`Test ${index + 1}: FAILED (Expected: ${expected}, Got: ${result})`);
        }
    });
}

// Ensure you define the `maxConsecutiveOnes` function before running this test
testMaxConsecutiveOnes();
