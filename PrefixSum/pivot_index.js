/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let prefixSum = 0;
    let sum = nums.reduce((acc, e) => acc + e, 0);
    for (let key = 0; key < nums.length; key++) {
        if (prefixSum === (sum - prefixSum - nums[key])) {
            return key;
        } 
        prefixSum += nums[key];
    }

    return -1;
};


function testPivotIndex() {
    const tests = [
        { nums: [1, 7, 3, 6, 5, 6], expected: 3 },
        { nums: [1, 2, 3], expected: -1 },
        { nums: [2, 1, -1], expected: 0 },
        { nums: [0, 0, 0, 0], expected: 0 },
        { nums: [1, -1, 0, 0], expected: 2 },
    ];

    tests.forEach(({ nums, expected }, index) => {
        const result = pivotIndex(nums);
        if (result === expected) {
            console.log(`Test ${index + 1}: PASSED`);
        } else {
            console.error(`Test ${index + 1}: FAILED (Expected: ${expected}, Got: ${result})`);
        }
    });
}

// Run the test cases
testPivotIndex();
