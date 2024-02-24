let movieLine = ["tom", "nancy"];

movieLine[2] = "pablo"
console.log(movieLine)

movieLine.push("oliver") //Adds at last index
console.log(movieLine)

movieLine.pop()  //Returns the last item of the array and removes it.
console.log(movieLine)

let array1 = [1,2,3]
let array2 = [4,5,6]

let array3 = array1.concat(array2)  //Combines two arrays
console.log(array3)

console.log(array1.includes(1))  // Will return true

//Slice will return a copy with the specified elements of the original array. 
array3.slice(2,4)
console.log(array3)

let months = ["Jan", "Mar", "Apr", "June"]
months.splice(1,0,"Feb")  //Adds the element in the specified position in this case without deleting any element. 
console.log(months)