const request = require("request");
//process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 1;
URL = "https://reqres.in/api/users";

const callExternalApiUsingRequest = (callback) => {
    try{
  request(URL, { json: true }, (err, res, result) => {
    
    if (err) {
      return callback(err);
    }
    //  const userData=await JSON.stringify(result);
    //  console.log("userData    "+userData)
    //  console.log(typeof userData)
    //  console.log("2  "+userData.email)

  



    //  const getOnlyUser=userData.map(obj=>(obj))
    //  console.log("getUser   "+getOnlyUser)
    
    //  const usersDetails=getOnlyUser.map(obj=>({
    //     name:obj.first_name+" "+obj.last_name,
    //     email:obj.email
    //  }));

    //console.log(result.title);
    return callback(result);
  });
}catch(e){
    console.log(e.message);
}
}

module.exports.callApiUsers = callExternalApiUsingRequest;
