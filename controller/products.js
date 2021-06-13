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
async function getProductByName(nameProduct) {
  try {
    const products = await productsModel.find({ name: nameProduct });
    console.log(products);

    if (products.length == 0) {
    console.log("this product doesn't exists")
      return undefined;
    }

    else {
      return products[0];
    }

  } catch (err) {
    console.log(err);
    return undefined;
  }
}
async function createProduct(req,res){

 /* req.body :*/
  let data = '';
  req.on('data', chunk => {
    data += chunk;
  })
  req.on('end', () => {
    req.body = JSON.parse(data);
   
    res.setHeader("Content-Type", "application/json");
    //const queryUser = url.parse(req.url,true).query;
    const product = new productsModel(req.body);
    console.log(req.body);
    try {

      product.save((err) => {
        if (err) {
          console.log(err)
          res.statusCode = 500
          res.setHeader('Content-Type', 'application/json')
          res.write(JSON.stringify({ success: false, message: 'Internal server error' }))
          res.end()
        } else {
          res.statusCode = 200
          res.setHeader('Content-Type', 'application/json')
          res.write(JSON.stringify({ success: true, message: product }))
          res.end()
        }
      })
    } catch (e) {
      res.statusCode = 500
      res.setHeader('Content-Type', 'application/json')
      res.write(JSON.stringify({ success: false, message: 'Internal server error!' }))
      res.end()
    }
  })
}

async function deleteProduct(req,res){
    
    try {

      req.products.remove({ _id: ObjectId(req.params.id) }, (err) => {
        if (err) {
          console.log(err)
          res.statusCode = 500
          res.setHeader('Content-Type', 'application/json')
          res.write(JSON.stringify({ success: false, message: 'Internal server error' }))
          res.end()
        } else {
          res.statusCode = 200
          res.setHeader('Content-Type', 'application/json')
          res.write(JSON.stringify({ success: true, message: product }))
          res.end()
        }
      })
    } catch (e) {
      res.statusCode = 500
      res.setHeader('Content-Type', 'application/json')
      res.write(JSON.stringify({ success: false, message: 'Internal server error!' }))
      res.end()
    }
  

}
 



module.exports = { getAllProducts,createProduct,getProductByName,deleteProduct};
