/*
 * Question 3:
 * Generate 500 random numbers and print the nth smallest number
 */

// Generate random number list
function generateRandomNumList (totalNum) {
    let arr = []
    for (let i = 0; i < totalNum; i++) {
         let randomNum = Math.floor(Math.random() * 500)
         console.log(randomNum)
         arr.push(randomNum)
    }
    return arr
}

// find Nth smallest number out of the random number list
function findNthRandomNum () {
  let randomNumList = generateRandomNumList(500)
  randomNumList.sort(function(a, b){return a - b});
  return randomNumList[0]
}

console.log(findNthRandomNum())
