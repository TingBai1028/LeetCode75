/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    const arr = s.split("");
    let i = 0; 
    let j = s.length - 1;

    while (i < j) {
        if (!isVowel(arr[i])) {
            i++;
            continue;
        }

        if (!isVowel(arr[j])) {
            j--;
            continue;
        }

        let k = arr[i];
        arr[i] = arr[j];
        arr[j] = k;
        
        i++;
        j--;
    }

    return arr.join('');
};

function isVowel(c)
{
    return (c == 'a' || c == 'A' || c == 'e'
                || c == 'E' || c == 'i' || c == 'I'
                || c == 'o' || c == 'O' || c == 'u'
                || c == 'U');
}

function testReverseVowels() {
    const tests = [
        {
            input: "IceCreAm",
            expected: "AceCreIm",
        },
        {
            input: "leetcode",
            expected: "leotcede",
        },
        {
            input: "hello",
            expected: "holle",
        },
        {
            input: "aA",
            expected: "Aa",
        },
        {
            input: "AEIOU",
            expected: "UOIEA",
        },
        {
            input: "bcdfg",
            expected: "bcdfg", // No vowels
        },
        {
            input: "a",
            expected: "a", // Single character
        },
        {
            input: "",
            expected: "", // Empty string
        }
    ];

    tests.forEach(({ input, expected }, index) => {
        const result = reverseVowels(input);
        const isPassing = result === expected;
        console.log(`Test ${index + 1}: ${isPassing ? 'PASS' : 'FAIL'}`);
        if (!isPassing) {
            console.log(`  Input: "${input}"`);
            console.log(`  Expected: "${expected}"`);
            console.log(`  Got: "${result}"`);
        }
    });
}

// Call the test function
testReverseVowels();
