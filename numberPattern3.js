

//Print Reverse Right-Angled Triangle of increasing Numbers
/**
    12345
    1234
    123
    12
    1
 */


function starPattern(num) {

    for (let i = 0; i < num; i++) {
        let row = " ";

        for (let j = 0; j < num -i; j++) {
            row = row + (j+ 1);
        }
        console.log(row);
    }
}

let n = 5;
starPattern(n)