

//Print a Right-Angled Triangle of Alternating 1s and 0s
/**
    1
    10
    101
    1010
    10101
 */

function binaryPattern(num) {

    for (let i = 0; i < n; i++) {
        let row = " ";
        let toggle = 1;

        for (let j = 0; j <= i; j++) {
            row = row + toggle;

            if (toggle == 1) {
                toggle = 0;
            } else {
                toggle = 1;
            }

        }
        console.log(row);
    }

}

let n = 5;
binaryPattern(n)