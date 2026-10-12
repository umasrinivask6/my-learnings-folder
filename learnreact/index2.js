// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
//
// Output: [[1,6],[8,10],[15,18]]

const arr1 = [-2,1,-3,4,-11,2,1,-5,4]
// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// subarray [4,-1,2,1]

function largestSumSubarray(arr =  [-2,1,-3,4,-11,2,3,-5,0]) {
    let maxSum = arr[0];
    let currentSum = arr[0];
  
    for (let i = 1; i < arr.length; i++) {
      if(arr[i]< currentSum + arr[i]){
        currentSum = currentSum + arr[i]
      }
      else{
        currentSum = arr[i]
      }      
      if(maxSum<currentSum){
        maxSum=currentSum
      }
    }
  
    return maxSum;
  }






const arr = [[1,3],[2,6],[8,10],[15,18]]
const mergedIntervals = [arr[0]]
for(let i=1;i<arr.length;i++){
    const prev = mergedIntervals[mergedIntervals.length-1]
    const curr = arr[i]
    if(prev[1]>curr[0]){
        prev[1] = curr[1]
    }
    else{
        mergedIntervals.push(curr)
    }
}

console.log(mergedIntervals)

