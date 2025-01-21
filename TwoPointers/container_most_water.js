/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0; 
    let right = height.length - 1;
    let max = 0;
    while (left < right) {
        let water = Math.min(height[left], height[right]) * (right - left);
        if (water > max) {
            max = water;
        }

        if (height[left] >= height[right]) {
            right -= 1;
        } else {
            left += 1;
        }
    }
    return max;
}


function testMaxArea() {
    const tests = [
        { input: [1, 8, 6, 2, 5, 4, 8, 3, 7], expected: 49 },
        { input: [1, 1], expected: 1 },
        { input: [4, 4, 4, 4], expected: 12 },
        { input: [7, 6, 5, 4, 3, 2, 1], expected: 12 },
        { input: [1, 2, 100, 2, 1], expected: 4 },
        { input: [0, 0, 0, 0, 0], expected: 0 },
        { input: [1000, 1000, 1000, 1000, 1000], expected: 4000 },
    ];

    tests.forEach(({ input, expected }, index) => {
        const result = maxArea(input);
        if (expected === "Random" || expected === "Depends on calculation") {
            console.log(`Test ${index + 1}: PASSED (Result: ${result})`);
        } else if (result === expected) {
            console.log(`Test ${index + 1}: PASSED`);
        } else {
            console.error(`Test ${index + 1}: FAILED (Expected: ${expected}, Got: ${result})`);
        }
    });
}

// Make sure your maxArea function is defined above this point
 testMaxArea();

