"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var globalization = exports.globalization = {

  getPreferredLanguage: function getPreferredLanguage() {
    return new Promise(function (resolve, reject) {
      navigator.globalization.getPreferredLanguage(function (result) {
        resolve(result);
      }, function (err) {
        reject(err);
      });
    });
  },

  getLocaleName: function getLocaleName() {
    return new Promise(function (resolve, reject) {
      navigator.globalization.getLocaleName(function (result) {
        resolve(result);
      }, function (err) {
        reject(err);
      });
    });
  },

  getFirstDayOfWeek: function getFirstDayOfWeek() {
    return new Promise(function (resolve, reject) {
      navigator.globalization.getFirstDayOfWeek(function (result) {
        resolve(result);
      }, function (err) {
        reject(err);
      });
    });
  },

  // "date" parameter must be a JavaScript Date Object.
  dateToString: function dateToString(date, options) {
    return new Promise(function (resolve, reject) {
      navigator.globalization.dateToString(date, function (result) {
        resolve(result);
      }, function (err) {
        reject(err);
      }, options);
    });
  },

  stringToDate: function stringToDate(dateString, options) {
    return new Promise(function (resolve, reject) {
      navigator.globalization.stringToDate(dateString, function (result) {
        resolve(result);
      }, function (err) {
        reject(err);
      }, options);
    });
  },

  getDatePattern: function getDatePattern(options) {
    return new Promise(function (resolve, reject) {
      navigator.globalization.getDatePattern(function (result) {
        resolve(result);
      }, function (err) {
        reject(err);
      }, options);
    });
  },

  getDateNames: function getDateNames(options) {
    return new Promise(function (resolve, reject) {
      navigator.globalization.getDateNames(function (result) {
        resolve(result);
      }, function (err) {
        reject(err);
      }, options);
    });
  },

  // "date" parameter must be a JavaScript Date Object.
  isDayLightSavingsTime: function isDayLightSavingsTime(date) {
    return new Promise(function (resolve, reject) {
      navigator.globalization.isDayLightSavingsTime(date, function (result) {
        resolve(result);
      }, function (err) {
        reject(err);
      });
    });
  },

  numberToString: function numberToString(number, options) {
    return new Promise(function (resolve, reject) {
      navigator.globalization.numberToString(number, function (result) {
        resolve(result);
      }, function (err) {
        reject(err);
      }, options);
    });
  },

  stringToNumber: function stringToNumber(numberString, options) {
    return new Promise(function (resolve, reject) {
      navigator.globalization.stringToNumber(numberString, function (result) {
        resolve(result);
      }, function (err) {
        reject(err);
      }, options);
    });
  },

  getNumberPattern: function getNumberPattern(options) {
    return new Promise(function (resolve, reject) {
      navigator.globalization.getNumberPattern(function (result) {
        resolve(result);
      }, function (err) {
        reject(err);
      }, options);
    });
  },

  getCurrencyPattern: function getCurrencyPattern(currencyCode) {
    return new Promise(function (resolve, reject) {
      navigator.globalization.getCurrencyPattern(currencyCode, function (result) {
        resolve(result);
      }, function (err) {
        reject(err);
      });
    });
  }
};