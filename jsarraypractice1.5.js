
let range = [];
//let step = 0;
const makeRange= function(start, end, step)
    {  
        if (start <= end){
            while (start <= end){
            range.push(start);
            start = start + ( step || 1 );
            }
        return range;
        } else {
            while (start >= end){
            range.push(start);
            start = start - ( step || 1 );
            }
        return range;
        }
    }
    console.log(makeRange(3, -3, 2));

const sum = function (){
    counter = 0;
    total = range[0]; 
    while (counter < (range.length -1) ){ 
        counter++
        total  = total + range[counter];
        //console.log(total);
    }
    return total;
}

console.log(sum(makeRange(3,-3)));
