/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {

    let length = nums.length;
    let finalArray = new Array(length).fill(1);

    let prefix = 1;
    for (let i = 0; i < length; i++) {
        finalArray[i] = prefix;
        prefix *= nums[i];
    }

    let suffix = 1;                            
    for (let i = length - 1; i >= 0; i--) {         
        finalArray[i] *= suffix;                 
        suffix *= nums[i];                        
    }

return finalArray;
}
