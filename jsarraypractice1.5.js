
    let range = [];
    
    const makeRange= function(start, end)
    {
        while (start <= end){
        range.push(start);
        start++;
        }
        return range;
    }
    console.log(makeRange(6,10));
/*const sum = function (){
    counter = 1;
    total = range[0];
    while (counter < range.length){
        total = total + range[counter]
        counter++
    }
    
//}
*/