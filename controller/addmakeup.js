const fs = require('fs')

function getAddMakeupHTML (req, res) {
 
  res.statusCode = 200
  var data = fs.readFileSync('./views/add-makeup.html', 'utf8');
  if(req["headers"]["cookie"].split('=')[1] === "") {
    res.setHeader('Content-Type', 'text/html')
    //res.setHeader('Set-Cookie', token=${token};path=/)
    var loggedinstatus = "Login"
  
    data = data.replace("{{loggedin}}", `<li><a class="nav-link" href="login.html">${loggedinstatus}</a></li>`)
  }
  else {
    var data = fs.readFileSync('./views/search.html', 'utf8');
    
    var loggedinstatus = "Logout"

    data = data.replace("{{loggedin}}", `<li><a class="nav-link" href="Myaccount.html">Account</a></li>
    <li><a class="nav-link" href="login.html">${loggedinstatus}</a></li>`)
    console.log("ce face")
    
    //res.setHeader('Content-Type', 'text/html')
    res.setHeader("Set-Cookie", 'token=;path=/')
  
    
  }
  
    res.setHeader("Set-Cookie", 'token=;path=/')
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
function getAddMakeupCSS1 (req, res) {
  var data2 = fs.readFileSync('./views/styles/add-makeup.css', 'utf8');
  res.setHeader('Content-Type', 'text/css')
  res.write(data2)
  res.end()
}

function getAddMakeupCSS2 (req, res) {
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
function getAddMakeupJS (req, res) {
  var data2 = fs.readFileSync('./views/scripts/nav.js', 'utf8');
  res.setHeader('Content-Type', 'text/javascript')
  res.write(data2)
  res.end()
}

module.exports = { getAddMakeupHTML, getAddMakeupCSS1,getAddMakeupCSS2, getAddMakeupJS, exempleAPI}
