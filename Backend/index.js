const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
const {connection}=require('./db')
const router=express.Router();
const userRoutes=require('./routes/userRoutes')
const recipeRoutes=require('./routes/recipeRoutes')
app.use(express.json());


app.use('/users',userRoutes);
app.use('/recipes',recipeRoutes);

app.listen(port,async () => {
try {
    await connection
      console.log("Connected to the DB")
  } catch (error) {
      console.log(error)
      console.log("Something went wrong")
  }
    console.log(`Server is running on port ${port}`);
});
