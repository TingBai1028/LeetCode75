/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    // initialize maxCount as 0
    let maxCount = 0; 
    // and result as first substring of size k
    let res = s.substr(0, k); 
    // iterate through the string
    for (let i = 0, count = 0; i < s.length; i++) 
    {
        // if current character is a vowel
        if (isVowel(s[i])) 
            count++; // then increase count
            
        // if character that is leaving  
        if (i >= k && isVowel(s[i - k])) 
                            // the window is a vowel
            count--; // then decrease count

        if (count > maxCount) // if we get a substring
                                // having more vowels
        {
            maxCount = count; // update count
            if (i >= k)
                // and update result
                res = s.substr(i - k + 1, k); 
        }
        // if we get a substring with same
        if (count == maxCount && i >= k) 
                        // maximum number of vowels
        {
            let t = s.substr(i - k + 1, k);
            if (t < res) // then check if it is
                            // lexicographically smaller than
                            // current result and update it
                res = t;
        }
    }
    return maxCount;
};


// Wrong answer
// Todo: Fix this!!
//
// var maxVowels = function(s, k) {
//     if (s.length === k) {
//         return vowelContain(s);
//     }

//     let window = s.slice(0, k);
//     let max = 0;
//     let count = vowelContain(window);
//     for (let i = k; i < s.length; i++) {
//         if (isVowel(s[i])) {
//             count++;
//         }

//         if (isVowel(s[i - k])) {
//             count--;
//         }
//         if (count > max) {
//             max = count;
//         }
//     }
//     return max;
// };

function isVowel(c) {
    return ['a', 'e', 'i', 'o', 'u'].indexOf(c.toLowerCase()) !== -1
}

function vowelContain(s) {
    let N = s.length;
    let count = 0;
    for (var i = 0; i < N; i++) {
        if (isVowel(s[i]))
            count++;
    }
    return count;
}

function testMaxVowels() {
    const tests = [
        { input: { s: "abciiidef", k: 3 }, expected: 3 },
        { input: { s: "aeiou", k: 2 }, expected: 2 },
        { input: { s: "leetcode", k: 3 }, expected: 2 },
        { input: { s: "rhythms", k: 4 }, expected: 0 },
        { input: { s: "aaa", k: 1 }, expected: 1 },
        { input: { s: "abcdef", k: 3 }, expected: 1 },
        { input: { s: "uaeiouxxeaiou", k: 5 }, expected: 5 },
        { input: { s: "a" + "b".repeat(100000) + "a", k: 1000 }, expected: 1 },
        { input: { s: "a".repeat(50000) + "e".repeat(50000), k: 50000 }, expected: 50000 },
    ];

    tests.forEach(({ input: { s, k }, expected }, index) => {
        const result = maxVowels(s, k);
        if (result === expected) {
            console.log(`Test ${index + 1}: PASSED`);
        } else {
            console.error(`Test ${index + 1}: FAILED (Expected: ${expected}, Got: ${result})`);
        }
    });
}

// Ensure you define the `maxVowels` function before running this test
testMaxVowels();
