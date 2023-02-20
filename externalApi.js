const express = require("express");

const app = express();

const port = 8000;

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

var request = require("request");

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
//process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 1;

app.get("/users", (req, res) => {
  try {
    var options = {
      method: "GET",

      url: "https://reqres.in/api/users",

      json: true,
    };

    request(options, function (error, data) {
      if (error) {
        console.log(error);
      }
      //console.log(JSON.stringify(data));

      /*res.send(data);*/ //get all data from this link

      //if we expect the name and email, we can use below commands lines

      const dataValue = data.data;

      //console.log("final  "+JSON.stringify(dataValue));

      const usersDetails = dataValue.map((obj) => ({
        name: obj.first_name + " " + obj.last_name,
        email: obj.email,
      }));

      res.send(usersDetails);
      res.end();
    });
  } catch (e) {
    console.log(res, e.message);
  }
});

app.post("/users", (req, res) => {
  try {
    var options = {
      method: "POST",

      url: "https://reqres.in/api/users",

      body: {
        name: req.body.name,

        job: req.body.job,
      },

      json: true,
    };

    request(options, function (error, response, body) {
      if (error) {
        console.log(error);
      }
      // console.log(JSON.stringify(body));

      res.send(JSON.stringify(body));
    });
  } catch (e) {
    console.log(res, e.message);
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
