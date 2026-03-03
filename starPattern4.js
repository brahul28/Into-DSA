

//Print a Right-Aligned Right-Angled Triangle of *
/**
           *
         * *
       * * *
     * * * *
   * * * * *    
 */



function starPattern(num) {

    for (let i = 0; i < num; i++) {
        let row = " ";

    //this loop adding space
        for (let j = 0; j < num -(i+1); j++) {
            row = row + (" ");
        }
    //this loop prints the pattern
        for (let k = 0; k < i + 1; k++){
            row = row + "*";
        }
        console.log(row);
    }
}

let n = 5;
starPattern(n)