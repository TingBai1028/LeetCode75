/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let i = 0;
    let j = 0; 
    while (i < s.length && j < t.length) {
        if (s[i] === t[j]) {
            i++;
        }
        j++;
    }
    if (i === s.length) {
        return true;
    }
    return false;
};

// Test function
function testIsSubsequence(isSubsequence) {
    let passed = true;
  
    // Test Case 1: s is a subsequence of t
    let s = "abc";
    let t = "ahbgdc";
    let expectedOutput = true;
    if (isSubsequence(s, t) !== expectedOutput) {
      console.log("Test Case 1 Failed");
      passed = false;
    }
  
    // Test Case 2: s is not a subsequence of t
    s = "axc";
    t = "ahbgdc";
    expectedOutput = false;
    if (isSubsequence(s, t) !== expectedOutput) {
      console.log("Test Case 2 Failed");
      passed = false;
    }
  
    // Test Case 3: s is empty (always a subsequence)
    s = "";
    t = "ahbgdc";
    expectedOutput = true;
    if (isSubsequence(s, t) !== expectedOutput) {
      console.log("Test Case 3 Failed");
      passed = false;
    }
  
    // Test Case 4: t is empty, but s is not (cannot be a subsequence)
    s = "a";
    t = "";
    expectedOutput = false;
    if (isSubsequence(s, t) !== expectedOutput) {
      console.log("Test Case 4 Failed");
      passed = false;
    }
  
    // Test Case 5: Both s and t are empty (s is a subsequence of t)
    s = "";
    t = "";
    expectedOutput = true;
    if (isSubsequence(s, t) !== expectedOutput) {
      console.log("Test Case 5 Failed");
      passed = false;
    }
  
    // Test Case 6: s has repeated characters
    s = "aaa";
    t = "abcabcabc";
    expectedOutput = true;
    if (isSubsequence(s, t) !== expectedOutput) {
      console.log("Test Case 6 Failed");
      passed = false;
    }
  
    // Test Case 7: t does not contain characters in s
    s = "xyz";
    t = "ahbgdc";
    expectedOutput = false;
    if (isSubsequence(s, t) !== expectedOutput) {
      console.log("Test Case 7 Failed");
      passed = false;
    }
  
    // Test Case 8: Large t with a valid s subsequence
    s = "ace";
    t = "abcdefghijklmnopqrstuvwxyz".repeat(1000);
    expectedOutput = true;
    if (isSubsequence(s, t) !== expectedOutput) {
      console.log("Test Case 8 Failed");
      passed = false;
    }
  
    if (passed) {
      console.log("All test cases passed!");
    }
  }
  
  // Run the test
  testIsSubsequence(isSubsequence);
  