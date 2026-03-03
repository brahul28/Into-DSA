
//Print Reverse Right-Angled Triangle of *
/**
    *****
    ****
    ***
    **
    *
 */



function starPattern(num) {

    for (let i = 0; i < num; i++) {
        let row = " ";

        for (let j = 0; j < num -i; j++) {
            row = row + "*";
        }
        console.log(row);
    }
}

let n = 5;
starPattern(n)