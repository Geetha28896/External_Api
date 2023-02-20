const axios = require("axios");
const express = require("express");
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
//process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 1;

const app = express();
const port = 3000;

/**
 * GET API
 */
app.get("/products", (req, res) => {
  axios
    .get("https://dummyjson.com/products")
    .then((response) => {
      res.json(response.data);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send("Error fetching data from external API");
    });
});

/**
 * POST API
 */

// app.post("/products", (req, res) => {
//   axios
//     .post("https://dummyjson.com/products", req.body)
//     .then((response) => {
//       res.json(response.data);
//     })
//     .catch((error) => {
//       console.error(error);
//       res.status(500).send("Error fetching data from external API");
//     });
// });

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
