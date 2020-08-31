/* Algo Match Last Name
Difficulty: Medium
Create a function called matchLastName that takes two arugments an array of objects(arg1) and a single object with one key value pair(arg2). You are expected to return all objects in arg1 that match the value of arg2

Given: [{first: "Casey", last: "Mac"}, {first: "Red" last: "Foreman"}], {last: "Foreman"}

Expected: [{first: "Red", last: "Foreman"}] */


function matchLastName(objArr, nameObj){
    result= objArr.filter((obj)=>{
        if (obj.last == nameObj.last) {
                return obj
        }
    })
    console.log("result: ", result)
}


matchLastName([{first: "Casey", last: "Mac"}, {first: "Red", last: "Foreman"}], {last: "Foreman"})