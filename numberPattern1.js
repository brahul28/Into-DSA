//Print Right-Angled Number Triangle
/**
    1
    12
    123
    1234
    12345 
 */


function numberPattern(num) {

    for (let i = 0; i < num; i++) {
        let row = " ";

        // for (let j = 1; j <= i+1; j++) {
        //     row = row + j;
        // }

        for (let j = 0; j < i + 1; j++) {
            row = row + (j + 1);
        }
        console.log(row);
    }
}

let n = 5;
numberPattern(n)