function removeDuplicates(nums) {
    let cnt = 1;
    let prev = nums[0];

    for (const num of nums.slice(1)) {
        if (num !== prev) {
            nums[cnt] = num;
            cnt++;
            prev = num;
        }
    }
    return cnt;
}