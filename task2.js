function twoSum(nums, target) {
    let map = new Map();
    let result = [];

    nums.forEach((num, index) => {
        let complement = target - num;

        if (map.has(complement)) {
            result = [map.get(complement), index];
        } else {
            map.set(num, index);
        }
    });

    return result;
}