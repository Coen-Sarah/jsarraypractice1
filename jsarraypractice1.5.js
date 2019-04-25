
let range = [];
    
const makeRange= function(start, end)
    {  
        if (start <= end){
            while (start <= end){
            range.push(start);
            start++;
            }
        return range;
        } else {
            while (start >= end){
            range.push(start);
            start--;
            }
        return range;
        }
    }
    console.log(makeRange(3,-3));

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
