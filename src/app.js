const express = require('express');
const connectdb = require("./config/database"); 
const app = express();
const User = require("./models/user");

app.use(express.json());
 
app.post("/signup", async(req,res)=>{



   const user  = new User(req.body);
  //creating a new user instance
 

  await user.save();
  res.send("User signed up successfully");
});

connectdb().then(()=>{
  console.log('Database connected successfully');
  app.listen(3000,()=>{
  console.log('Server is running on port 3000');
});
}).catch((err)=>{
  console.error('Database connection error:', err);
});

