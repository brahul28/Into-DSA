

//Print a Right-Angled Triangle of Alternating 1s and 0s (Global Toggle)
/**
    1
    01
    010
    1010
    10101
 */

function binaryPattern(num) {

    let toggle = 1;
    for (let i = 0; i < n; i++) {
        let row = " ";

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