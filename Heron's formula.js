// DESCRIPTION:
// Write function heron which calculates the area of a triangle with sides a, b, and c (x, y, z in COBOL).
// Output should have 2 digits precision.
//
// SOLUTION:

function heron(a, b, c) {
    let s = [...arguments].reduce((a,c) => a+c, 0) / 2;
    return Math.sqrt((s * (s-a) * (s-b) * (s-c)), 2);
}