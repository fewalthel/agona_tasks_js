function removeDuplicates(nums) {
    if (nums.length === 0) { return 0; }

    let cnt = 1;
    let prev = nums[0];

    for (const num of nums.slice(1)) {
        if (num !== prev) {
            nums[cnt] = num;
            cnt++;
            prev = num;
        }
    }

    for (const [index] of nums.entries()) {
        if (index >= cnt) {
            nums[index] = '_';
        }
    }

    return cnt;
}