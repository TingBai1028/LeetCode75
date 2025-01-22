/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function(nums, k) {
    nums.sort((a, b) => a - b);
    let ans = 0;

    let left = 0; 
    let right = nums.length - 1;

    while (left < right) {
        let sum = nums[left] + nums[right];
        if (sum === k) {
            ans++;
            left++;
            right--;
        } else if (sum < k) {
            left++;
        } else {
            right--;
        }
    }
    return ans;
};

function testMaxOperations() {
    const tests = [
        { input: { nums: [1, 2, 3, 4], k: 5 }, expected: 2 },
        { input: { nums: [3, 1, 3, 4, 3], k: 6 }, expected: 1 },
        { input: { nums: [2, 2, 2, 2], k: 4 }, expected: 2 },
        { input: { nums: [5, 5, 5], k: 10 }, expected: 1 },
        { input: { nums: [1, 1, 1, 1], k: 2 }, expected: 2 },
        { input: { nums: [10, 10, 10], k: 20 }, expected: 1 },
        { input: { nums: [1, 2, 3, 4, 5, 6, 7, 8], k: 9 }, expected: 4 },
        { input: { nums: [1], k: 2 }, expected: 0 },
        { input: { nums: [1, 2, 3, 4], k: 8 }, expected: 0 },
        { input: { nums: Array(100000).fill(1), k: 2 }, expected: 50000 },
    ];

    tests.forEach(({ input: { nums, k }, expected }, index) => {
        const result = maxOperations(nums, k);
        if (result === expected) {
            console.log(`Test ${index + 1}: PASSED`);
        } else {
            console.error(`Test ${index + 1}: FAILED (Expected: ${expected}, Got: ${result})`);
        }
    });
}

// Ensure you define the `maxOperations` function before running this test
testMaxOperations();
