const productsModel = require("../models/product");
const url = require('url');
async function getAllProducts(req, res) {

  res.setHeader("Content-Type", "application/json");
  const queryProduct = url.parse(req.url,true).query;
  try {
    const products = await productsModel.find({...queryProduct});
    console.log(products);
    res.statusCode = 200;
  console.log(queryProduct);
    return res.end(JSON.stringify({ success: true, products }));
  
   
  } catch (err) {
    console.log(err);
    res.statusCode = 500;
     return res.end(
      JSON.stringify({ success: false, message: "Internal server error" })
    );
   
  
  }
}
// async function createProduct(req,res)

module.exports = { getAllProducts };
