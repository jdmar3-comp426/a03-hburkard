import mpg_data from "./data/mpg_data.js";
import {getStatistics} from "./medium_1.js";

/*
This section can be done by using the array prototype functions.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
see under the methods section
*/


/**
 * This object contains data that has to do with every car in the `mpg_data` object.
 *
 *
 * @param {allCarStats.avgMpg} Average miles per gallon on the highway and in the city. keys `city` and `highway`
 *
 * @param {allCarStats.allYearStats} The result of calling `getStatistics` from medium_1.js on
 * the years the cars were made.
 *
 * @param {allCarStats.ratioHybrids} ratio of cars that are hybrids
 */

var hycount = 0;

for (let i=0; i < mpg_data.length; i++){
    if (mpg_data[i].hybrid == true){
        hycount++
    }
}

export const allCarStats = {
    avgMpg: f_avgMpg(mpg_data),
    allYearStats: f_allYearStats(mpg_data),
    ratioHybrids: hycount/mpg_data.length
};

export function f_avgMpg(mpg) {
    let hwy1 = [];
    let city1 = [];

    for (let i=0; i<mpg.length; i++){
        hwy1.push(mpg[i]['highway_mpg']);
    }
    for (let i=0; i<mpg.length; i++){
        city1.push(mpg[i]['city_mpg']);
    }
    return {
        city: getStatistics(city1).mean,
        highway: getStatistics(hwy1).mean
    }
};

export function f_allYearStats(mpg) {
    let years = [];
    for (let i=0; i<mpg.length; i++){
        years.push(mpg[i]['year']);
    }
    return getStatistics(years);
}

/**
 * HINT: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
 *
 * @param {moreStats.makerHybrids} Array of objects where keys are the `make` of the car and
 * a list of `hybrids` available (their `id` string). Don't show car makes with 0 hybrids. Sort by the number of hybrids
 * in descending order.
 *
 *[{
 *     "make": "Buick",
 *     "hybrids": [
 *       "2012 Buick Lacrosse Convenience Group",
 *       "2012 Buick Lacrosse Leather Group",
 *       "2012 Buick Lacrosse Premium I Group",
 *       "2012 Buick Lacrosse"
 *     ]
 *   },
 *{
 *     "make": "BMW",
 *     "hybrids": [
 *       "2011 BMW ActiveHybrid 750i Sedan",
 *       "2011 BMW ActiveHybrid 750Li Sedan"
 *     ]
 *}]
 *
 *
 *
 *
 * @param {moreStats.avgMpgByYearAndHybrid} Object where keys are years and each year
 * an object with keys for `hybrid` and `notHybrid`. The hybrid and notHybrid
 * should be an object with keys for `highway` and `city` average mpg.
 *
 * Only years in the data should be keys.
 *
 * {
 *     2020: {
 *         hybrid: {
 *             city: average city mpg,
 *             highway: average highway mpg
 *         },
 *         notHybrid: {
 *             city: average city mpg,
 *             highway: average highway mpg
 *         }
 *     },
 *     2021: {
 *         hybrid: {
 *             city: average city mpg,
 *             highway: average highway mpg
 *         },
 *         notHybrid: {
 *             city: average city mpg,
 *             highway: average highway mpg
 *         }
 *     },
 *
 * }
 *
 * var maker = []
 * for (let i=0; i < mpg_data.length; i++){
 *    if maker
 *}
 **/
export function makerOfHybrids (mpg){
    var maker = [];
    for (let i=0; i < mpg.length; i++){
        if (mpg[i].hybrid){
            if (maker.some(element => element.make === mpg[i].make)){
                maker[mpg[i].make].hybrids.push(mpg[i].id);
            }
            else{
                maker.push({
                    "make": mpg[i].make,
                    "hybrids": [mpg[i].id]
                })
            }
        }
    }

}

/*
export function ampyh (mpg){
    var maker = {};
    for (let i=0; i < mpg.length; i++){
        if (mpg.year in maker){
            mpg.year
        }
        if (mpg[i].hybrid){
            if (maker.some(element => element.make === mpg[i].make)){
                maker[mpg[i].make].hybrids.push(mpg[i].id);
            }
            else{
                maker.push({
                    "make": mpg[i].make,
                    "hybrids": [mpg[i].id]
                })
            }
        }
    }
}
*/

export const moreStats = {
    makerHybrids: makerOfHybrids(mpg_data),
    avgMpgByYearAndHybrid: undefined
};


