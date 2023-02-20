const apiRequest = require("./request");
const apiUsersRequest = require("./userRequest");
const apiCallFromNode = require("./NodeJsCall");
const http = require("http");

http
  .createServer((req, res) => {
    if (req.url === "/products") {
      apiRequest.callApi(function (response) {
        res.write(JSON.stringify(response));
        res.end();
      });
    } else if (req.url === "/users") {
      apiUsersRequest.callApiUsers(function (response) {

        // console.log(typeof response);
        // console.log("response  "+JSON.stringify(response));
        // console.log("array  "+response.data);
        const val=response.data;

        //console.log("final  "+JSON.stringify(val));

        const usersDetails=val.map(obj=>({
              name:obj.first_name+" "+obj.last_name,
              email:obj.email
           }));

        



           res.write(JSON.stringify(usersDetails));
        res.end();
      });
    } else if (req.url === "/node") {
      apiCallFromNode.callApi(function (response) {
        res.write(JSON.stringify(response));
        res.end();
      });
    }
  })
  .listen(8000);

console.log("service running on 8000 port,...!");
