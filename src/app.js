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
//get user by email
app.get("/user",async (req,res)=>{
  const userEmail =  req.body.emailId;

  try{
      const user = await User.find({emailId: userEmail});
      if(user,length === 0){ 
        res.status(404).send("User not found");
       }
       else{
         res.send(user);
       }
       }
  catch(err){
    res.status(500).send("Error retrieving user");
  }
});



app.get("/feed",async(req,res)=>{

  try{
       const user = await User.find({});
       res.send(user);
  }
  catch(err){
    res.status(500).send("Error retrieving users");
  }
});
 

connectdb().then(()=>{
  console.log('Database connected successfully');
  app.listen(3000,()=>{
  console.log('Server is running on port 3000');
});
}).catch((err)=>{
  console.error('Database connection error:', err);
});

