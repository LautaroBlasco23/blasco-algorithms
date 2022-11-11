var removeDuplicates = function(nums) {
    let values = {}
    for(let i = 0; i < nums.length; i++){
        if(values[nums[i]] == undefined) values[nums[i]] = 1;
        else if(values[nums[i]] = 1){
            nums.splice(i,1)
            i--
        }
    }
    return nums.length
};