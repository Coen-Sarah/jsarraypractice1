
let range = [];
    
const makeRange= function(start, end)
    {
        while (start <= end){
        range.push(start);
        start++;
        }
        return range;
    }
//    console.log(makeRange(1,5));

const sum = function (){
    counter = 0;
    total = range[0]; 
    while (counter < (range.length -1) ){ 
        counter++
        total  = total + range[counter];
      //  console.log(total);
    }
    return total;
}

console.log(sum(makeRange(6,10)));
