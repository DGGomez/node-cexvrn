/**
 * Refer to the following data when completing your answers: (The following JSON
 * file contains providers available for an industry)
 */

const PROVIDERS = require('../shared/data.json');

/**
 * Create a query that returns total premiums and fees available for retail industry
 */
function task1() {
  var totalPrem = 0;
  var totalFees = 0;
  for (var i = 0; i < PROVIDERS.length; i++) {
    if (PROVIDERS[i].industry == 'retail') {
      PROVIDERS[i].prices.forEach((element) => {
        if (element.premium != null && element.premium != '') {
          totalPrem += parseInt(element.premium);
        }
        if (element.fee != null && element.fee != '') {
          totalFees += parseInt(element.fee);
        }
      });
    }
  }

  return [{ totalPremium: totalPrem, totalFees: totalFees }];

  /**
   * TODO: Your body goes here
   */
}

/**
 * Create a query that returns the minimum premium available among the providers for technology industry
 */
function task2() {
  /**
   * TODO: Your body goes here
   */
  var minPrem = Number.MAX_SAFE_INTEGER;
  for (var i = 0; i < PROVIDERS.length; i++) {
    if (PROVIDERS[i].industry == 'technology') {
      PROVIDERS[i].prices.forEach((element) => {
        if (element.premium != null && element.premium != '') {
          minPrem = Math.min(parseInt(element.premium), minPrem);
        }
      });
    }
  }
  return [{ totalPremium: minPrem }];
}

/**
 * Create a query that returns all the provider names available for the technology industry
 * that has a premium amount greater than or equal to 1000
 */
function task3() {
  /**
   * TODO: Your body goes here
   */
  var results = [];
  for (var i = 0; i < PROVIDERS.length; i++) {
    if (PROVIDERS[i].industry == 'technology') {
      PROVIDERS[i].prices.forEach((element) => {
        if (element.premium != null && element.premium != '') {
          if (parseInt(element.premium) >= 1000) {
            results.push(PROVIDERS[i].name);
          }
        }
      });
    }
  }
  return results;
}

/**
 * To see the expected results, please refer to ./expected-data.json file in part-1 directory!
 * NOTE: Please ensure that all the tests in part-1.spec.js are passing!
 */

module.exports = {
  task1,
  task2,
  task3,
};
