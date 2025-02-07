/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    let set1 = new Set(nums1);
    let set2 = new Set(nums2);
    
    let res = [];
    let diff1 = [...set1].filter((e) => !set2.has(e));
    let diff2 = [...set2].filter((e) => !set1.has(e));
    res.push(diff1);
    res.push(diff2);
    return res;
};

function testFindDifference(input1, input2, expected) {
    const result = findDifference(input1, input2);
    const passed = JSON.stringify(result) === JSON.stringify(expected);
    const color = passed ? '\x1b[32m' : '\x1b[31m'; // Green for true, Red for false
    console.log(`Input: ${JSON.stringify(input1)}, ${JSON.stringify(input2)} | Output: ${JSON.stringify(result)} | Expected: ${JSON.stringify(expected)} | Passed: ${color}${passed}\x1b[0m`);
}

testFindDifference([1,2,3], [2,4,6], [[1,3],[4,6]]);
testFindDifference([1,2,3,3], [1,1,2,2], [[3],[]]);
testFindDifference([], [1,2,3], [[], [1,2,3]]);
testFindDifference([1,2,3], [], [[1,2,3], []]);
testFindDifference([5,5,5], [5,5,5], [[], []]);
testFindDifference([-1,-2,-3], [-3,-4,-5], [[-1,-2], [-4,-5]]);
testFindDifference([1000,999,998], [999,998,997], [[1000], [997]]);
