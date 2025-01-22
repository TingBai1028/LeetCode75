/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let windowSum = nums.slice(0, k).reduce((a, b) => a + b, 0);

    let maxSum = windowSum;

    for (let i = k; i < nums.length; i++) {
        windowSum += (nums[i] - nums[i - k]);
        if (windowSum > maxSum) {
            maxSum = windowSum;
        }
    }

    return maxSum / k;
};

function testFindMaxAverage() {
    const tests = [
        { input: { nums: [1, 12, -5, -6, 50, 3], k: 4 }, expected: 12.75000 },
        { input: { nums: [5], k: 1 }, expected: 5.00000 },
        { input: { nums: [-1, -2, -3, -4], k: 2 }, expected: -1.50000 },
        { input: { nums: [1, 2, 3, 4, 5, 6, 7, 8, 9], k: 3 }, expected: 8.00000 },
        { input: { nums: [100, -1, -2, -3, -4], k: 1 }, expected: 100.00000 },
        { input: { nums: [-10, -20, -30, -40, -50], k: 5 }, expected: -30.00000 },
        { input: { nums: Array(100000).fill(1), k: 50000 }, expected: 1.00000 },
    ];

    tests.forEach(({ input: { nums, k }, expected }, index) => {
        const result = findMaxAverage(nums, k);
        if (Math.abs(result - expected) < 1e-5) {
            console.log(`Test ${index + 1}: PASSED`);
        } else {
            console.error(`Test ${index + 1}: FAILED (Expected: ${expected.toFixed(5)}, Got: ${result.toFixed(5)})`);
        }
    });
}

// Ensure you define the `findMaxAverage` function before running this test
testFindMaxAverage();
