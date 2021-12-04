import {variance} from "./data/stats_helpers.js";

/**
 * Gets the sum of an array of numbers.
 * @param array
 * @returns {*}
 * see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
 * prototype functions. Very useful
 */
export function getSum(array) {
    let c = 0;
    for (let i=0; i < array.length; i++){
        c += array[i];
    }
    return c
}


/**
 * Calculates the median of an array of numbers.
 * @param {number[]} array
 * @returns {number|*}
 *
 * example:
 * let array = [3,2,5,6,2,7,4,2,7,5];
 * console.log(getMedian(array)); // 4.5
 */
export function getMedian(array) {
    let sa = array.sort((a,b) => a-b);
    if (sa.length % 2 == 0){
        return (sa[sa.length/2]+sa[sa.length/2+1])/2;
    }
    return sa[(sa.length+1)/2];
}

/**
 * Calculates statistics (see below) on an array of numbers.
 * Look at the stats_helper.js file. It does variance which is used to calculate std deviation.
 * @param {number[]} array
 * @returns {{min: *, median: *, max: *, variance: *, mean: *, length: *, sum: *, standard_deviation: *}}
 *
 * example:
 * getStatistics([3,2,4,5,5,5,2,6,7])
 * {
  length: 9,
  sum: 39,
  mean: 4.333333333333333,
  median: 5,
  min: 2,
  max: 7,
  variance: 2.6666666666666665,
  standard_deviation: 1.632993161855452
 }
 */
export function getStatistics(array) {
    let ar = {
        length: array.length,
        sum: getSum(array),
        mean: getSum(array)/array.length,
        median: getMedian(array),
        min: Math.min.apply(Math, array),
        max: Math.max.apply(Math, array),
        variance: variance(array, getSum(array)/array.length),
        standard_deviation: variance(array, getSum(array)/array.length)**.5
    }

    return ar;
}

