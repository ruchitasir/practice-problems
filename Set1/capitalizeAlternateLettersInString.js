// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.
// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.
// The input will be a lowercase string with no spaces.

let str= "abcdef"
const capitalizeEvenAndOdd=(validStr) =>{
  let result = []
  let strEven=''
  let strOdd =''
    for (let i=0; i< validStr.length-1; i++){
        if(i%2==0){
            char = str[i].toUpperCase()
        }
        else{
            char = str[i]
        }
        strEven = strEven + char 
    }
    result.push(strEven)

    for (let i=0; i< validStr.length-1; i++){
        if(i%2!=0){
            char = str[i].toUpperCase()
        }
        else{
            char = str[i]
        }
        strOdd = strOdd + char 
    }
    result.push(strOdd)
    return result
}

console.log(capitalizeEvenAndOdd('abcdef'))