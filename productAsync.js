const axios = require("axios");
const express = require("express");
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const app = express();
const port = 3000;
app.get("/products", async (req, res) => {
  try {
    const response = await axios.get("https://dummyjson.com/products");
    const products = response.data.products;
    const productDetails = products.map((obj) => ({
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
    }));
    res.write(JSON.stringify(productDetails));
    res.end();

    //res.json(productDetails);//its also give a expected result
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching data from external API");
  }
});
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}/products`);
});
