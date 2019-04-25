const range = function (start,end){
    let total = start;
    while (start < end){
        total = total + (start + 1);
        start++ ;
        console.log(total);
    }
    return total;
}

console.log(range(6,10));