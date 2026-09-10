import mongoose from "mongoose";

export const  connectDB = async () =>{

await mongoose.connect(
  'mongodb+srv://pizzaking_01:Prena1234@cluster0.5c8bvuu.mongodb.net/food-del?appName=Cluster0'
).then(() => console.log("DB Connected"));
   
}


// add your mongoDB connection string above.
// Do not use '@' symbol in your databse user's password else it will show an error.