function numberType(number){
    let result;
    if(number > 0){
        result="Positive"
    }else if(number < 0){
        result="Negative"
    }else{
        result="Zero"
    }
    return result;
}
console.log(numberType(5));
console.log(numberType(-1));
console.log(numberType(0));

