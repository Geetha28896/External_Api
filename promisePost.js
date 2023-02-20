const express = require("express");
const axios = require("axios");

const app = express();
const PORT = 3000;

app.use(express.json());

app.post("/products", async (req, res) => {
  try {
    const response = await axios.post("https://dummyjson.com/products", {
      data: req.body,
      headers: {
        Authorization: "Bearer MY_AUTH_TOKEN",
        "Content-Type": "application/json",
      },
    }); // handle successful response here, e.g. by sending it back to the client
    res.send(response.data);
  } catch (error) {
    // handle any errors here, e.g. by sending an error message back to the client
    res.status(500).send("Error: " + error.message);
  }
});


app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});