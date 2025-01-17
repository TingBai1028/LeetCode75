/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let prod = 1;
    let zeros = 0;
    let index = -1;
    for (const key of nums) {
        if (key === 0) {
            zeros++;
            index = nums.indexOf(key);
        } else {
            prod = prod * key;
        }
    }

    let result = new Array(nums.length).fill(0);
    if (zeros === 0) {
        for (const key in nums) {
            const res = prod / nums[key];
            result[key] = res;
        }  
    } else if (zeros === 1) {
        result[index] = prod;
    }

    return result;
};

// Test function
function testProductExceptSelf(productExceptSelf) {
    let passed = true;
  
    // Test Case 1: Positive integers
    let input = [1, 2, 3, 4];
    let expected = [24, 12, 8, 6];
    let output = productExceptSelf(input);
    if (JSON.stringify(output) !== JSON.stringify(expected)) {
      console.log(`Test Case 1 Failed: Expected ${expected}, Got ${output}`);
      passed = false;
    }
  
    // Test Case 2: Including zero
    input = [-1, 1, 0, -3, 3];
    expected = [0, 0, 9, 0, 0];
    output = productExceptSelf(input);
    if (JSON.stringify(output) !== JSON.stringify(expected)) {
      console.log(`Test Case 2 Failed: Expected ${expected}, Got ${output}`);
      passed = false;
    }
  
    // Test Case 3: Single zero in array
    input = [0, 2, 3, 4];
    expected = [24, 0, 0, 0];
    output = productExceptSelf(input);
    if (JSON.stringify(output) !== JSON.stringify(expected)) {
      console.log(`Test Case 3 Failed: Expected ${expected}, Got ${output}`);
      passed = false;
    }
  
    // Test Case 4: All negative numbers
    input = [-1, -2, -3, -4];
    expected = [-24, -12, -8, -6];
    output = productExceptSelf(input);
    if (JSON.stringify(output) !== JSON.stringify(expected)) {
      console.log(`Test Case 4 Failed: Expected ${expected}, Got ${output}`);
      passed = false;
    }
  
    // Test Case 5: Array of twos
    input = [2, 2, 2, 2];
    expected = [8, 8, 8, 8];
    output = productExceptSelf(input);
    if (JSON.stringify(output) !== JSON.stringify(expected)) {
      console.log(`Test Case 5 Failed: Expected ${expected}, Got ${output}`);
      passed = false;
    }
  
    // Test Case 6: Length of 2
    input = [3, 4];
    expected = [4, 3];
    output = productExceptSelf(input);
    if (JSON.stringify(output) !== JSON.stringify(expected)) {
      console.log(`Test Case 6 Failed: Expected ${expected}, Got ${output}`);
      passed = false;
    }
  
    // Final result
    if (passed) {
      console.log("All test cases passed!");
    }
  }
  
  // Example function signature (replace with your own function)
  function productExceptSelf(nums) {
    // Implement the logic here
    return [];
  }
  
  // Run the test
  testProductExceptSelf(productExceptSelf);
  
