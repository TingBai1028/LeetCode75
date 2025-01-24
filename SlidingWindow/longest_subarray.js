/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
    let left = 0; 
    let zeroCount = 0;
    let res = 0;
    for (let right = 0; right < nums.length; right++) {
        if (nums[right] === 0) {
            zeroCount++;
        }
        while (zeroCount > 1) {
            if (nums[left] === 0) {
                zeroCount--;
            }
            left++;
        }
        res = Math.max(res, (right - left))
    }
    return res
};

function testLongestSubarray() {
    const tests = [
        { nums: [1, 1, 0, 1], expected: 3 },
        { nums: [0, 1, 1, 1, 0, 1, 1, 0, 1], expected: 5 },
        { nums: [1, 1, 1], expected: 2 },
        { nums: [0, 0, 0], expected: 0 },
        { nums: [1, 1, 1, 1], expected: 3 },
        { nums: [1, 0, 1, 0, 1, 1, 1], expected: 4 },
        { nums: [1, 0, 0, 1, 1, 0, 1], expected: 3 },
    ];

    tests.forEach(({ nums, expected }, index) => {
        const result = longestSubarray(nums);
        if (result === expected) {
            console.log(`Test ${index + 1}: PASSED`);
        } else {
            console.error(`Test ${index + 1}: FAILED (Expected: ${expected}, Got: ${result})`);
        }
    });
}

// Run the test cases
testLongestSubarray();
