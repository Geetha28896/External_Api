const apiRequest = require("./request");
const apiUsersRequest = require("./userRequest");
const apiCallFromNode = require("./NodeJsCall");
const http = require("http");

http
  .createServer((req, res) => {
    if (req.url === "/products") {
      apiRequest.callApi(function (response) {
        const dataValue = response.products;
        const productDetails = dataValue.map((obj) => ({
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
      });
    } else if (req.url === "/users") {
      apiUsersRequest.callApiUsers(function (response) {
        // console.log(typeof response);
        // console.log("response  "+JSON.stringify(response));
        // console.log("array  "+response.data);
        const val = response.data;

        //console.log("final  "+JSON.stringify(val));

        const usersDetails = val.map((obj) => ({
          name: obj.first_name + " " + obj.last_name,
          email: obj.email,
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

console.log("service running on 3000 port,...!");
