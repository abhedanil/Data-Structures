
// Given an integer array nums, find the subarray with the largest sum, and return its sum.


// We are using kadence algorithm which is the most ideal way to solve this problem 
const arr=[1,-3,4,6,-2,5]

const findMaxSum=(arr)=>{

    let currentSum=arr[0]
    let maxSum=arr[0]
    const n=arr.length
    for(let i=1;i<n;i++){

        currentSum=Math.max(arr[i],currentSum+arr[i])
        maxSum=Math.max(arr[i],currentSum)
    }

}
findMaxSum(arr)

//time complexity: O(n)
//space complexity: O(1)