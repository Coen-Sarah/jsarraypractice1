const range = function (start,end){
    let total = start;
    while (start < end){
        total = total + (start + 1);
        start++ ;
    }
    return total;
}
console.log(range(5,10));