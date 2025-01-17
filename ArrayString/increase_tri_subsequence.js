/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    let first = Math.max(...nums);
    let second = Math.max(...nums);
    for (const key of nums) {
        if (key <= first) {
            first = key;
        } else if (key <= second) {
            second = key;
        } else {
            return true;
        }
    }
    return false;
};

// Test function
function testIncreasingTriplet(increasingTriplet) {
    let passed = true;
  
    // Test Case 1: Simple increasing sequence
    let input = [1, 2, 3, 4, 5];
    let expected = true;
    let output = increasingTriplet(input);
    if (output !== expected) {
      console.log(`Test Case 1 Failed: Expected ${expected}, Got ${output}`);
      passed = false;
    }
  
    // Test Case 2: Simple decreasing sequence
    input = [5, 4, 3, 2, 1];
    expected = false;
    output = increasingTriplet(input);
    if (output !== expected) {
      console.log(`Test Case 2 Failed: Expected ${expected}, Got ${output}`);
      passed = false;
    }
  
    // Test Case 3: Triplet exists in a mixed sequence
    input = [2, 1, 5, 0, 4, 6];
    expected = true;
    output = increasingTriplet(input);
    if (output !== expected) {
      console.log(`Test Case 3 Failed: Expected ${expected}, Got ${output}`);
      passed = false;
    }
  
    // Test Case 4: Large input with no triplet
    input = Array(100000).fill(10);
    expected = false;
    output = increasingTriplet(input);
    if (output !== expected) {
      console.log(`Test Case 4 Failed: Expected ${expected}, Got ${output}`);
      passed = false;
    }
  
    // Test Case 5: Large input with a triplet at the end
    input = Array(99997).fill(10).concat([1, 2, 3]);
    expected = true;
    output = increasingTriplet(input);
    if (output !== expected) {
      console.log(`Test Case 5 Failed: Expected ${expected}, Got ${output}`);
      passed = false;
    }
  
    // Test Case 6: Edge case with minimum length array
    input = [1, 2];
    expected = false;
    output = increasingTriplet(input);
    if (output !== expected) {
      console.log(`Test Case 6 Failed: Expected ${expected}, Got ${output}`);
      passed = false;
    }
  
    // Test Case 7: Edge case with duplicates
    input = [1, 1, 1, 1, 1];
    expected = false;
    output = increasingTriplet(input);
    if (output !== expected) {
      console.log(`Test Case 7 Failed: Expected ${expected}, Got ${output}`);
      passed = false;
    }
  
    // Test Case 8: Triplet at the start
    input = [1, 2, 3, 0, 0, 0];
    expected = true;
    output = increasingTriplet(input);
    if (output !== expected) {
      console.log(`Test Case 8 Failed: Expected ${expected}, Got ${output}`);
      passed = false;
    }
  
    if (passed) {
      console.log("All test cases passed!");
    }
  }
  
  // Run the test
  testIncreasingTriplet(increasingTriplet);
  
