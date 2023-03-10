// DESCRIPTION:
// In this Kata, you will be given a string and your task is to return the most valuable character.
// The value of a character is the difference between the index of its last occurrence and the index of its
// first occurrence. Return the character that has the highest value. If there is a tie, return the alphabetically
// lowest character. [For Golang return rune]
//
// All inputs will be lower case.
//
// For example:
// solve('a') = 'a'
// solve('ab') = 'a'. Last occurrence is equal to first occurrence of each character. Return lexicographically lowest.
// solve("axyzxyz") = 'x'
// More examples in test cases. Good luck!
//
// SOLUTION:

function solve(st) {
    const values = [...st].reduce((acc, char, _index, array) => {
        const firstOcurrenceIndex = array.indexOf(char);
        const lastOcurrenceIndex = array.lastIndexOf(char);

        return {...acc, [char]: Math.abs(lastOcurrenceIndex - firstOcurrenceIndex)};
    }, {});

    const [highestValue] = Object.entries(values).sort(
        ([charA, diffA], [charB, diffB]) => diffB - diffA || charA.localeCompare(charB),
    );

    return highestValue[0];
}