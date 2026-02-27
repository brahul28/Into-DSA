function smallestNumber(){
    let num = Infinity;
    for( let i = 0; i< arr.length; i++){
        if(arr[i] < num){
            num = arr[i];
        }
    }
    console.log(num);
}

let arr = [2, -6, 4, 8, 1, -9];
smallestNumber(arr);