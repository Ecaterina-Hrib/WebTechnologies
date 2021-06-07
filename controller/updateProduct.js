const fs = require('fs')

function getUpdateProductHTML (req, res) {
 
  res.statusCode = 200
  //fs.createReadStream('Admin.html').pipe(res)
  var data = fs.readFileSync('./views/update-product.html', 'utf8');
  res.setHeader('Content-Type', 'text/html')
  res.write(data)
  res.end()

console.log(fs)
}
function getProducts(req,res){
  
}
function exempleAPI(req,res)
{
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.write(JSON.stringify({ success: true, message: 'example ran successfully' }))
  res.end()
}
function getUpdateProductCSS1 (req, res) {
  var data2 = fs.readFileSync('./views/styles/update-product.css', 'utf8');
  res.setHeader('Content-Type', 'text/css')
  res.write(data2)
  res.end()
}

function getUpdateProductCSS2 (req, res) {
  var data2 = fs.readFileSync('./views/styles/nav.css', 'utf8');
  res.setHeader('Content-Type', 'text/css')
  res.write(data2)
  res.end()
}
function getNavbarCSS (req, res) {
  try {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/css')
    res.write(navBarCSS)
    res.end()
  } catch (e) {
    console.log(e)
    res.statusCode = 500
    res.setHeader('Content-Type', 'text/css')
    res.write('Internal server error')
    res.end()
  }
}
function getUpdateProductJS (req, res) {
  var data2 = fs.readFileSync('./views/scripts/nav.js', 'utf8');
  res.setHeader('Content-Type', 'text/javascript')
  res.write(data2)
  res.end()
}

module.exports = { getUpdateProductHTML, getUpdateProductCSS1,getUpdateProductCSS2, getUpdateProductJS, exempleAPI}

