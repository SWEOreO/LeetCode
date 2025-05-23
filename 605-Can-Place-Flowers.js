// You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.

// Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.

 

// Example 1:

// Input: flowerbed = [1,0,0,0,1], n = 1
// Output: true
// Example 2:

// Input: flowerbed = [1,0,0,0,1], n = 2
// Output: false
 

// Constraints:

// 1 <= flowerbed.length <= 2 * 104
// flowerbed[i] is 0 or 1.
// There are no two adjacent flowers in flowerbed.
// 0 <= n <= flowerbed.length

// Solution 
const canPlaceFlowers = function(flowerbed, n) {
    let count = 0;
    for (let i = 0; i < flowerbed.length; i++) {
        if (
            flowerbed[i] === 0 &&
            (i === 0 || flowerbed[i - 1] === 0) &&
            (i === flowerbed.length - 1 || flowerbed[i + 1] === 0)
        ) {
            flowerbed[i] = 1; // Plant a flower
            count++;
        }
    }
    return count >= n;
};

// Solution 2
var canPlaceFlowers2 = function(flowerbed, n) {
    let current = 0; 
    const len = flowerbed.length;
	for(var i = 0; i <= len; i++) {
		if (i < len && flowerbed[i] == 0) {
			current++;
			if (i == 0) current++;
			if (i == len - 1) current++;
		} else {
			n -= Math.trunc((current - 1) / 2);
			if (n <= 0) return true;
			current = 0;
		}
	}
	return false;
};

// Solution 3
var canPlaceFlowers3 = function(flowerbed, n) {
    for (let i = 0; i < flowerbed.length; i++) {
        const left = i === 0 || flowerbed[i - 1] === 0;
        const right = i === flowerbed.length - 1 || flowerbed[i + 1] === 0;
        
        if (left && right && flowerbed[i] === 0) {
            flowerbed[i] = 1;
            n--;
        }
    }
    return n <= 0;   
};
