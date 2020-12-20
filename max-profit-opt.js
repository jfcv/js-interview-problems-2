

function maximumProfit(prices) {
    
    let minPrice = Infinity;
    let maxProfit = 0;

    for (let i = 0; i < prices.length; i++) { //O(n)
        minPrice = Math.min(minPrice, prices[i]);
        maxProfit = Math.max(maxProfit, prices[i] - minPrice);
    }

    return maxProfit;
}

//Time Complexity: O(n)

//Space Complexity: O(1)

console.log(
    maximumProfit([10,7,5,8,11,9]),
    maximumProfit([10,7,5,3,2,1])
);