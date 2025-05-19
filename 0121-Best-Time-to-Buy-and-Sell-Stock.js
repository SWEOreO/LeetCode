// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

 

// Example 1:

// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
// Example 2:

// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.
 

// Constraints:

// 1 <= prices.length <= 105
// 0 <= prices[i] <= 104


// Solution 1 - while loop
var maxProfit = function(prices) {
  let left = 0;
  let right = 1;
  let maxProfit = 0;

  while (right < prices.length) {
    if (prices[left] < prices[right]) {
      let profit = prices[right] - prices[left];
      
      maxProfit = Math.max(maxProfit, profit);
    } else {
      left = right;
    }
    right++;
  }
    
  return maxProfit
};


// Solution 2 - for loop

/**
 * @param {number[]} prices
 * @return {number}
 */
class Solution {
  maxProfit(prices) {
    let buy = prices[0];
    let profit = 0;
    for (let i = 0; i < prices.length; i++ ) {
      if (prices[i] < buy) {
        buy = prices[i];
      } else if (prices[i] - buy > profit) {
        profit = prices[i] - buy;
      }
    }

    return profit;
  }
}


// solution Greg - Easy to understand

var maxProfit = function(prices) {
  let minPrice = Infinity;
  let maxProfit = 0;

  for (const price of prices) {
      if (price < minPrice) {
          minPrice = price;
      }
      const profit = price - minPrice;
      if (profit > maxProfit) {
          maxProfit = profit;
      }
  }

  return maxProfit;
};


// Solution 3 - One pass
var maxProfit = function(prices) {
    let profit = 0;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
        profit += prices[i] -prices[i -1];
    }
  }

  return profit;
};


// Solution 4 - Two pointers
var maxProfit = function(prices) {
    var i = 0;
    var lo = prices[0];
    var hi = prices[0];
    var profit = 0;
    var n = prices.length;

    while (i < n - 1) {
        // Look where to buy
        while (i < n - 1 && prices[i] >= prices[i + 1]) {
            i++;
        }
        lo = prices[i];

        // Look where to sell
        while (i < n - 1 && prices[i] <= prices[i + 1]) {
            i++;
        }
        hi = prices[i];

        profit += hi - lo;
    }

    return profit;
};