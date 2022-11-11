/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchInsert = function(nums, target) {
    if(target < nums[0]) return 0
    for(let index in nums){

        if(target == nums[index]) return index
        if(target > nums[index-1] && target < nums[index]) return index
        if(nums[Number(index)+1] == undefined) return Number(index) + 1

    }
};