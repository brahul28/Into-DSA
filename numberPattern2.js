
//Print Right-Angled Number Triangle
/**
    1
    22
    333
    4444
    55555 
 */


function numberPattern(num) {

    for (let i = 0; i < num; i++) {
        let row = " ";

        // for (let j = 0; j <= i; j++) {
        //     row = row + (i+1);
        // }

        for (let j = 0; j < i + 1; j++) {
            row = row + (i+1);
        }
        console.log(row);
    }
}

let n = 5;
numberPattern(n)