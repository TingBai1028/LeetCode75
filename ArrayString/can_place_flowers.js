/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    if (flowerbed.length === 1 && flowerbed[0] !== 1) {
        return true;
    }

    flowerbed.push(0);
    flowerbed.unshift(0);

    let count = 0;
    for (let i = 1; i < (flowerbed.length - 1); i++) {
        if (flowerbed[i] === 0) {
            if ((flowerbed[i - 1] === 0) && flowerbed[i + 1] === 0) {
                flowerbed[i] = 1;
                count++;
            }
        }
    }
    return (count >= n);
};

// Import your function here, for example:
// const canPlaceFlowers = require('./path-to-your-function');

function testCanPlaceFlowers() {
    const tests = [
        {
            input: { flowerbed: [1, 0, 0, 0, 1], n: 1 },
            expected: true,
        },
        {
            input: { flowerbed: [1, 0, 0, 0, 1], n: 2 },
            expected: false,
        },
        {
            input: { flowerbed: [0, 0, 1, 0, 0, 1, 0, 0], n: 2 },
            expected: true,
        },
        {
            input: { flowerbed: [0, 0, 1, 0, 1], n: 1 },
            expected: true,
        },
        {
            input: { flowerbed: [1, 0, 0, 0, 0, 1], n: 1 },
            expected: true,
        },
        {
            input: { flowerbed: [0, 0, 0, 0, 0], n: 3 },
            expected: true,
        },
        {
            input: { flowerbed: [0, 0, 0, 0, 0, 0], n: 4 },
            expected: false,
        },
        {
            input: { flowerbed: [0, 0, 0, 0, 0, 0], n: 3 },
            expected: true,
        }
    ];

    tests.forEach(({ input, expected }, index) => {
        const result = canPlaceFlowers(input.flowerbed, input.n);
        const isPassing = result === expected;
        console.log(`Test ${index + 1}: ${isPassing ? 'PASS' : 'FAIL'}`);
        if (!isPassing) {
            console.log(`  Input: ${JSON.stringify(input)}`);
            console.log(`  Expected: ${expected}`);
            console.log(`  Got: ${result}`);
        }
    });
}

// Call the test function
testCanPlaceFlowers();
