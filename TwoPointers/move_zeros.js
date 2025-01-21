/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let temp = [];
    let count = 0;
    for (const key of nums) {
        if (key === 0) {
            count++;
        } else {
            temp.push(key);
        }
    }
    for (let i = 0; i < count; i++) {
        temp.push(0);
    }
    nums.splice(0, nums.length, ...temp);
};

// Test function
function testMoveZeroes(moveZeroes) {
    let passed = true;
  
    // Test Case 1: Mixed zeros and non-zeros
    let nums = [0, 1, 0, 3, 12];
    let expectedOutput = [1, 3, 12, 0, 0];
    moveZeroes(nums);
    if (nums.join(",") !== expectedOutput.join(",")) {
      console.log("Test Case 1 Failed");
      passed = false;
    }
  
    // Test Case 2: Array with only one zero
    nums = [0];
    expectedOutput = [0];
    moveZeroes(nums);
    if (nums.join(",") !== expectedOutput.join(",")) {
      console.log("Test Case 2 Failed");
      passed = false;
    }
  
    // Test Case 3: Array with no zeros
    nums = [1, 2, 3, 4];
    expectedOutput = [1, 2, 3, 4];
    moveZeroes(nums);
    if (nums.join(",") !== expectedOutput.join(",")) {
      console.log("Test Case 3 Failed");
      passed = false;
    }
  
    // Test Case 4: Array with all zeros
    nums = [0, 0, 0, 0];
    expectedOutput = [0, 0, 0, 0];
    moveZeroes(nums);
    if (nums.join(",") !== expectedOutput.join(",")) {
      console.log("Test Case 4 Failed");
      passed = false;
    }
  
    // Test Case 5: Large array with zeros in the middle
    nums = [1, 0, 2, 0, 3, 0, 4];
    expectedOutput = [1, 2, 3, 4, 0, 0, 0];
    moveZeroes(nums);
    if (nums.join(",") !== expectedOutput.join(",")) {
      console.log("Test Case 5 Failed");
      passed = false;
    }
  
    // Test Case 6: Single element non-zero
    nums = [7];
    expectedOutput = [7];
    moveZeroes(nums);
    if (nums.join(",") !== expectedOutput.join(",")) {
      console.log("Test Case 6 Failed");
      passed = false;
    }
  
    // Test Case 7: Large array with alternating zeros
    nums = Array(10000)
      .fill(0)
      .map((_, i) => (i % 2 === 0 ? 0 : i));
    expectedOutput = nums.filter((x) => x !== 0).concat(new Array(5000).fill(0));
    moveZeroes(nums);
    if (nums.join(",") !== expectedOutput.join(",")) {
      console.log("Test Case 7 Failed");
      passed = false;
    }
  
    if (passed) {
      console.log("All test cases passed!");
    }
  }
  
  
  // Run the test
  testMoveZeroes(moveZeroes);
  