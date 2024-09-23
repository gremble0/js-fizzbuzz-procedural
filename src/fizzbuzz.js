/**
 * @param {number} num
 * @returns {any[]}
 */
function fizzbuzz(num) {
  let out = new Array(num)

  let iter = ''
  for (let i = 1; i <= num; ++i) {
    if (i % 3 == 0) iter += 'Fizz'
    if (i % 5 == 0) iter += 'Buzz'

    if (iter === '') out[i - 1] = i
    else {
      out[i - 1] = iter
      iter = ''
    }
  }

  return out
}

const answer = fizzbuzz(15)

// Don't touch the code below this line, we'll cover it later
module.exports = answer
