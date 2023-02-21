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
      const products=response.data.products;
      const productDetails=products.map((obj)=>({
        id: obj.id,
        title: obj.title,
        description: obj.description,
        price: obj.price,
        discountPercentage: obj.discountPercentage.toString() + "%", //we can remove toString method then also its give expected output
        rating: obj.rating,
        stock: obj.stock,
        brand: obj.brand,
        category: obj.category,
        thumbnail: obj.thumbnail,
        images: obj.images.slice(0, 2),
      }))
      res.write(JSON.stringify(productDetails))
      res.end()


      //res.json(response.data);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send("Error fetching data from external API");
    });
});



app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}/products`);
});
