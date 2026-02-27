function EvenInArray(arr){
    for(let i = 0; i< arr.length; i++){
        if(arr[i] % 2 == 0){
            console.log(arr[i]);
        }
    }
}

let arr = [10, 3, 5, 2, 7, 6, 9];
EvenInArray(arr);