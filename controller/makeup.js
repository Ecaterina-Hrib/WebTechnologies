const makeupsModel = require("../models/makeups");
const url = require('url');
async function getAllMakeups(req, res) {

  res.setHeader("Content-Type", "application/json");
  const queryMakeup = url.parse(req.url,true).query;
  try {
    const makeups = await makeupsModel.find({...queryMakeup});
    console.log(makeups);
    res.statusCode = 200;
  console.log(queryMakeup);
    return res.end(JSON.stringify({ success: true, makeups }));
  
   
  } catch (err) {
    console.log(err);
    res.statusCode = 500;
     return res.end(
      JSON.stringify({ success: false, message: "Internal server error" })
    );
   
  
  }
}
async function createMakeup(req,res)
{

  /* req.body :*/
   let data = '';
   req.on('data', chunk => {
     data += chunk;
   })
   req.on('end', () => {
     req.body = JSON.parse(data);
    
     res.setHeader("Content-Type", "application/json");
     const makeup = new makeupsModel(req.body);
     console.log(req.body);
     try {
 
       makeup.save((err) => {
         if (err) {
           console.log(err)
           res.statusCode = 500
           res.setHeader('Content-Type', 'application/json')
           res.write(JSON.stringify({ success: false, message: 'Internal server error' }))
           res.end()
         } else {
           res.statusCode = 200
           res.setHeader('Content-Type', 'application/json')
           res.write(JSON.stringify({ success: true, message: makeup }))
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

module.exports = { getAllMakeups, createMakeup };
