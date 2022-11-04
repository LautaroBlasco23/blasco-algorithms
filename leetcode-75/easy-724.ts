function pivotIndex(nums: number[]): number {
    let pivot = -1;
    for(let i = 0; i < nums.length; i++){
        let sum1 = 0;
        for(let j = 0; j<i; j++){
            sum1 += nums[j];
        }
        let sum2 = 0;
        for(let j = nums.length - 1; j>i; j--){
            sum2 += nums[j];
        }
        if(sum1 == sum2 && pivot == -1) pivot = i
    }
    return pivot
};