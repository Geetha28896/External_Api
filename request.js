const request = require("request");
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

_EXTERNAL_URL = "https://dummyjson.com/products";

const callExternalApiUsingRequest = (callback) => {
  request(_EXTERNAL_URL, { json: true }, (err, res, result) => {
    if (err) {
      return callback(err);
    }

    //console.log(result.title);
    return callback(result);
  });
};

module.exports.callApi = callExternalApiUsingRequest;
