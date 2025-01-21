/**
 * @param {character[]} chars
 * @return {number} 
 * compress based in char array
 * return the length of array
 * 
 * if the group length = 1, append to the end of groups
 * otherwise append to the character
 */
var compress = function(chars) {
    let result = '';
    let len = chars.length;
    let count = 1;
    for (let i = 0; i < len; i++) { 
        if (chars[i] === chars[i + 1]) {
            count++;
        } else if (count === 1) {
            result += chars[i];
        } else {
            result += chars[i] + count;
            count = 1;
        }
    }
    chars.splice(0, chars.length, ...result);
    return result.length;
};

// Test function
function testCompress(compress) {
    let passed = true;
  
    // Test Case 1: Multiple groups of repeating characters
    let chars = ["a", "a", "b", "b", "c", "c", "c"];
    let expectedOutput = ["a", "2", "b", "2", "c", "3"];
    let expectedLength = 6;
    let outputLength = compress(chars);
    if (
      outputLength !== expectedLength ||
      chars.slice(0, expectedLength).join("") !== expectedOutput.join("")
    ) {
      console.log(`Test Case 1 Failed`);
      passed = false;
    }
  
    // Test Case 2: Single character input
    chars = ["a"];
    expectedOutput = ["a"];
    expectedLength = 1;
    outputLength = compress(chars);
    if (
      outputLength !== expectedLength ||
      chars.slice(0, expectedLength).join("") !== expectedOutput.join("")
    ) {
      console.log(`Test Case 2 Failed`);
      passed = false;
    }
  
    // Test Case 3: Large group compression
    chars = ["a", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"];
    expectedOutput = ["a", "b", "1", "2"];
    expectedLength = 4;
    outputLength = compress(chars);
    if (
      outputLength !== expectedLength ||
      chars.slice(0, expectedLength).join("") !== expectedOutput.join("")
    ) {
      console.log(`Test Case 3 Failed`);
      passed = false;
    }
  
    // Test Case 4: No consecutive characters
    chars = ["a", "b", "c", "d"];
    expectedOutput = ["a", "b", "c", "d"];
    expectedLength = 4;
    outputLength = compress(chars);
    if (
      outputLength !== expectedLength ||
      chars.slice(0, expectedLength).join("") !== expectedOutput.join("")
    ) {
      console.log(`Test Case 4 Failed`);
      passed = false;
    }
  
    // Test Case 5: Mixed single and repeated characters
    chars = ["a", "a", "a", "b", "c", "c"];
    expectedOutput = ["a", "3", "b", "c", "2"];
    expectedLength = 5;
    outputLength = compress(chars);
    if (
      outputLength !== expectedLength ||
      chars.slice(0, expectedLength).join("") !== expectedOutput.join("")
    ) {
      console.log(`Test Case 5 Failed`);
      passed = false;
    }
  
    // Test Case 6: Edge case - all characters the same
    chars = ["x", "x", "x", "x"];
    expectedOutput = ["x", "4"];
    expectedLength = 2;
    outputLength = compress(chars);
    if (
      outputLength !== expectedLength ||
      chars.slice(0, expectedLength).join("") !== expectedOutput.join("")
    ) {
      console.log(`Test Case 6 Failed`);
      passed = false;
    }
  
    // Test Case 7: Large input with alternating characters
    chars = Array(2000)
      .fill("a")
      .map((_, i) => (i % 2 === 0 ? "x" : "y"));
    expectedOutput = ["x", "1", "y", "1"].concat(new Array(1996).fill("x1"));
    expectedLength = 2000; // Length remains the same as no true compression
    outputLength = compress(chars);
    if (outputLength !== expectedLength) {
      console.log(`Test Case 7 Failed`);
      passed = false;
    }
  
    if (passed) {
      console.log("All test cases passed!");
    }
  }
  
  // Run the test
    testCompress(compress);
  