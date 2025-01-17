function twoSum(nums, target) {
    if (nums.length <= 1) {
        return [];
    }
    let map = new Map();

    for (const [index, num] of nums.entries()) {
        let complement = target - num;

        if (map.has(complement)) {
            return [map.get(complement), index];
        }
        map.set(num, index);
    }

    return [];
}
