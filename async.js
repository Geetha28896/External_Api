const axios = require("axios");
const express = require("express");
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const app = express();
const port = 3000;

app.get("/products", async (req, res) => {
  try {
    const response = await axios.get("https://reqres.in/api/users");

    console.log("res" + response);
    let result = response.data;
    //res.json(response.data,null,2);
    result
      .populate("id", "email")
      .exec()
      .then((val) => {
        if (!val) {
          return res.status(404).json({
            message: "id ot found",
          });
        }
        res.json({
          val: val
        });
      });
    //res.send(JSON.stringify(result))
    // console.log(response.data)
    console.log("type " + typeof response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching data from external API");
  }
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
