const https = require('https');
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
_EXTERNAL_URL = 'https://dummyjson.com/products';

const callExternalApiUsingHttp = (callback) =>{

    https.get(_EXTERNAL_URL, (resp)=>{
        let data = '';
        resp.on('data', (chunk)=>{
            data += chunk;

        });
        resp.on('end',()=>{
            return callback(data);
        });
    }).on('error',(err)=>{
        console.log("Error: "+err.message);
    })
}

module.exports.callApi=callExternalApiUsingHttp;