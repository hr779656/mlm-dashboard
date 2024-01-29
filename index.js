// IMPORT STATEMENT
const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 5000;
const bodyParser = require('body-parser');
const db = require('./Models');
const routes = require('./routes/allroutes')
const cors = require('cors')

// BBUILTIN MIDDLEWARES 
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.json());
app.use(cors());

// ROUTES
app.use("/api", routes)

// SERVER FUNCTION
db.sequelize.sync().then((result)=>{
  app.listen(port, ()=>{
      console.log(`Database Connected \nServer Run this Port ${port}`)
  })
}).catch((err)=>{
  console.log(err)
})