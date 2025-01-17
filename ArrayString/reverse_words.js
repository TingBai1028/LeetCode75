/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    const arr = s.trim().split(/\s+/);
    arr.reverse();
    return arr.join(' ');
};



// Test function
function testReverseWords() {
    let passed = true;

    // Test Case 1
    let input = "the sky is blue";
    let expected = "blue is sky the";
    let output = reverseWords(input);
    if (output !== expected) {
        console.log(`Test Case 1 Failed: Expected "${expected}", Got "${output}"`);
        passed = false;
    }

    // Test Case 2
    input = "  hello world  ";
    expected = "world hello";
    output = reverseWords(input);
    if (output !== expected) {
        console.log(`Test Case 2 Failed: Expected "${expected}", Got "${output}"`);
        passed = false;
    }

    // Test Case 3
    input = "a good   example";
    expected = "example good a";
    output = reverseWords(input);
    if (output !== expected) {
        console.log(`Test Case 3 Failed: Expected "${expected}", Got "${output}"`);
        passed = false;
    }

    // Test Case 4
    input = "    word    ";
    expected = "word";
    output = reverseWords(input);
    if (output !== expected) {
        console.log(`Test Case 4 Failed: Expected "${expected}", Got "${output}"`);
        passed = false;
    }

    // Test Case 5
    input = "        ";
    expected = "";
    output = reverseWords(input);
    if (output !== expected) {
        console.log(`Test Case 5 Failed: Expected "${expected}", Got "${output}"`);
        passed = false;
    }

    // Test Case 6
    input = "Hello LeetCode  Community ";
    expected = "Community LeetCode Hello";
    output = reverseWords(input);
    if (output !== expected) {
        console.log(`Test Case 6 Failed: Expected "${expected}", Got "${output}"`);
        passed = false;
    }

    // Test Case 7
    input = "123 456 789";
    expected = "789 456 123";
    output = reverseWords(input);
    if (output !== expected) {
        console.log(`Test Case 7 Failed: Expected "${expected}", Got "${output}"`);
        passed = false;
    }

    // Test Case 8
    input = "a b c d";
    expected = "d c b a";
    output = reverseWords(input);
    if (output !== expected) {
        console.log(`Test Case 8 Failed: Expected "${expected}", Got "${output}"`);
        passed = false;
    }

    if (passed) {
        console.log("All test cases passed!");
    }
}

// Run the tests
testReverseWords();
