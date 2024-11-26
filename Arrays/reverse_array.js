// Given an array arr[], the task is to reverse the array. Reversing an array means rearranging the elements such that the first element becomes the last, the second element becomes second last and so on.

// Input: arr[] = [1, 4, 3, 2, 6, 5] 
// Output: [5, 6, 2, 3, 4, 1]


// Temperory array method
const arr=[1, 4, 3, 2, 6, 5] 
const reverseArray=(arr)=>{
    const n= arr?.length
    let rev=[]
    for(let i=0;i<n;i++){
        rev[i]=arr[n-i-1]  
    }
    return rev
}
const newArray=reverseArray(arr)
console.log(newArray)

//time complexity : O(n)
//space complexity :O(1)

// If space is a concern we can do swapping 

const reverseArrayBySwap=(arr)=>{

    const n=arr.length
    for(let i=0;i<n/2;i++){
    [arr[i],arr[n-i-1]]=[arr[n-i-1],arr[i]]
    }
    return arr
}
console.log(reverseArrayBySwap(arr))
//time complexity: O(n)
//space: O(1)