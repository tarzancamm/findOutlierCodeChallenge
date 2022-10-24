// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a function that takes the array as an argument and returns this “outlier” N.


// take array and sort out
const outlier = (arr) => {
    let odds = []
    let evens = []
    let oddOutlier = []
    let evensOutlier = []

    // Loop through array and push evens and odds to respective empty arr variable
    for (let i = 0; i < arr.length; i++){
        if(arr[i] % 2 === 0) {
            evens.push(arr[i])
        } else {
            odds.push(arr[i])
        }
    }

    // Determine which evens/odds arr is bigger, then loop through the original array and push the outlier integar to the empty outlier evens or odds array
    if (odds.length > evens.length) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] % 2 === 0) {
                evensOutlier.push(arr[i])
            }
        return evensOutlier.join('')
        }
    } else if (evens.length > odds.length) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] % 2 === 1) {
                oddOutlier.push(arr[i])
            }
        }
        return oddOutlier.join('')
    }
}


let nums1 = [2, 4, 0, 100, 4, 11, 2602, 36]
let nums2 = [160, 3, 1719, 19, 11, 13, -21]

console.log(outlier(nums1))
console.log(outlier(nums2))
