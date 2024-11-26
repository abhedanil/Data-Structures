
// const num =[1,1,1,3,3,4,3,2,4,2]
const num=[1,2,3,1]
const findDuplicate=(nums)=>{
    const freq={}
    for(let i=0;i<nums.length;i++){
       if(freq[nums[i]]) freq[nums[i]]++
       else freq[nums[i]]=1
    }
    
    const duplicates= Object.keys(freq).filter((key)=>
        freq[key]>1
    )
   return duplicates?.length>0
}
findDuplicate(num)
console.log(findDuplicate(num))


// time complexity: O(n)
//space :O(1)