
export const globalization = {

  getPreferredLanguage: () => {
    return new Promise((resolve, reject) => {
      navigator.globalization.getPreferredLanguage(result => {
        resolve(result);
      },
      err => {
        reject(err);
      });
    });
  },

  getLocaleName: () => {
    return new Promise((resolve, reject) => {
      navigator.globalization.getLocaleName(result => {
        resolve(result);
      },
      err => {
        reject(err);
      });
    });
  },

  getFirstDayOfWeek: () => {
    return new Promise((resolve, reject) => {
      navigator.globalization.getFirstDayOfWeek(result => {
        resolve(result);
      },
      err => {
        reject(err);
      });
    });
  },

  // "date" parameter must be a JavaScript Date Object.
  dateToString: (date, options) => {
    return new Promise((resolve, reject) => {
      navigator.globalization.dateToString(
        date,
        result => {
          resolve(result);
        },
        err => {
          reject(err);
        },
        options
      );
    });
  },

  stringToDate: (dateString, options) => {
    return new Promise((resolve, reject) => {
      navigator.globalization.stringToDate(
        dateString,
        result => {
          resolve(result);
        },
        err => {
          reject(err);
        },
        options
      );
    });
  },

  getDatePattern: (options) => {
    return new Promise((resolve, reject) => {
      navigator.globalization.getDatePattern(
        result => {
          resolve(result);
        },
        err => {
          reject(err);
        },
        options
      );
    });
  },

  getDateNames: (options) => {
    return new Promise((resolve, reject) => {
      navigator.globalization.getDateNames(
        result => {
          resolve(result);
        },
        err => {
          reject(err);
        },
        options
      );
    });
  },

  // "date" parameter must be a JavaScript Date Object.
  isDayLightSavingsTime: date => {
    return new Promise((resolve, reject) => {
      navigator.globalization.isDayLightSavingsTime(
        date,
        result => {
          resolve(result);
        },
        err => {
          reject(err);
        }
      );
    });
  },

  numberToString: (number, options) => {
    return new Promise((resolve, reject) => {
      navigator.globalization.numberToString(
        number,
        result => {
          resolve(result);
        },
        err => {
          reject(err);
        },
        options
      );
    });
  },

  stringToNumber: (numberString, options) => {
    return new Promise((resolve, reject) => {
      navigator.globalization.stringToNumber(
        numberString,
        result => {
          resolve(result);
        },
        err => {
          reject(err);
        },
        options
      );
    });
  },

  getNumberPattern: options => {
    return new Promise((resolve, reject) => {
      navigator.globalization.getNumberPattern(
        result => {
          resolve(result);
        },
        err => {
          reject(err);
        },
        options
      );
    });
  },

  getCurrencyPattern: currencyCode => {
    return new Promise((resolve, reject) => {
      navigator.globalization.getCurrencyPattern(
        currencyCode,
        result => {
          resolve(result);
        },
        err => {
          reject(err);
        }
      );
    });
  }
};
