/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let curr = 0;
    let max = 0;
    for (const key of gain) {
        curr += key;
        max = Math.max(curr, max);
    }
    return max
};

function testLargestAltitude() {
    const tests = [
        { gain: [-5, 1, 5, 0, -7], expected: 1 },
        { gain: [-4, -3, -2, -1, 4, 3, 2], expected: 0 },
        { gain: [1, 2, 3, 4], expected: 10 },
        { gain: [-1, -2, -3, -4], expected: 0 },
        { gain: [100, -50, 50, -100], expected: 100 },
    ];

    tests.forEach(({ gain, expected }, index) => {
        const result = largestAltitude(gain);
        if (result === expected) {
            console.log(`Test ${index + 1}: PASSED`);
        } else {
            console.error(`Test ${index + 1}: FAILED (Expected: ${expected}, Got: ${result})`);
        }
    });
}

// Run the test cases
testLargestAltitude();
