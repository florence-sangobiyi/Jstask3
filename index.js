function numberToString(number) {
    let result =''
if (number %2 === 0 )
    result = result ? `${result} -yu` : 'yu';
if (number %3 === 0 )
    result = result ? `${result} -gi` : 'gi';
if (number %5 === 0 )
    result = result ? `${result} -oh` : 'oh';
    return result || number;
}
function numberToArray (number) {
    const array =[];
    for (let i = 1 ; i <= number; i++)
    array.push(numberToString(i));

    return array ;
}
numberToArray(100);