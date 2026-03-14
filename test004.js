// Size of the pattern
const N = 4;

let size = 2 * N - 1;

// Loop through rows
for (let i = 0; i < size; i++) {
    let row = "";

    // Loop through columns
    for (let j = 0; j < size; j++) {
        // Calculate value based on minimum distance from edges
        let val = N - Math.min(Math.min(i, j), Math.min(size - 1 - i, size - 1 - j));
        row += val + " ";
    }

    console.log(row.trim());
}
