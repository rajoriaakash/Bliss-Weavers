const express= require('express');
const mongoose = require('mongoose');
const path = require('path');
const config = require('config');

const authRoutes = require('./routes/authRoutes');
const productRoutes = require('./routes/productRoutes');
const cartRoutes = require('./routes/cartRoutes');
const orderRoutes = require('./routes/orderRoutes');
const app = express();
app.use(express.json());
app.use(cors())
app.use('/api',authRoutes);
app.use('/api',productRoutes);
app.use('/api',cartRoutes);
app.use('/api',orderRoutes);

const dbURI = config.get('dbURI');
const port = process.env.PORT || 4000;

app.post('/testing',function(req,res,next){
   if(req.body.message){
      console.log('message received');
      console.log(req.body.message);
   }else{
      res.send("Hey i didnt get anything");
   }
})
mongoose.connect(dbURI, {
   useNewUrlParser: true,
   useUnifiedTopology: true, 
   useCreateIndex:true })
   .then(console.log('Connected to database'))
   .then(() => app.listen(port, () => console.log(`Server running on http://localhost:${port}`)))
   .catch((err) => console.log(err));


