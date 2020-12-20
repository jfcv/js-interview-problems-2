

function maximumProfit(prices) {

    let maxProfit = 0;
    let currentProfit = 0;
    for (let i = 1; i < prices.length; i++) { // O(n)

        for (let j = 0; j < i; j++) { // O(m)
            if (prices[j] < prices[i]) {
                currentProfit = prices[i] - prices[j];
                if(currentProfit > maxProfit) {
                    maxProfit = currentProfit;
                }
            }
        }

    }

    return maxProfit;
}

//Time Complexity: O(m * n)

//Space Complexity: O(1)

console.log(
    maximumProfit([10,7,5,8,11,9]),
    maximumProfit([10,7,5,3,2,1])
);