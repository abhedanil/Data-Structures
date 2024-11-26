// Given an array of size N. The task is to find the maximum and the minimum element of the array using the minimum number of comparisons.
// Input: arr[] = {3, 5, 4, 1, 9}
// Output: Minimum element is: 1
//               Maximum element is: 9


// Input: arr[] = {22, 14, 8, 17, 35, 3}
// Output:  Minimum element is: 3
//               Maximum element is: 35

//Answer
const arr= [3, 5, 4, 1, 9]
const findMinAndMax=(arr)=>{

    let min=arr[0]
    let max=arr[0]

    for(let i=1;i<arr.length;i++){
        if(arr[i]<min) min=arr[i]
        if(arr[i]>max)max=arr[i]
    }
    return {min,max}

}
const {min,max}=findMinAndMax(arr)
console.log(`Minimum element is ${min} `)
console.log(`Maximum element is ${max} `)