const express = require('express');
const app = express();
const port = 6969;

const mongoose = require('mongoose');

const mongoUrl="mongodb://127.0.0.1:27017/Medgen";

main().then(()=>{
    console.log('Medgen Database connected successfully');
}).catch((error)=>{
    console.log('Error connecting to database ',error);
});

async function main(){
    await mongoose.connect(mongoUrl);
}

app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.get('/',(req,res)=>{
    res.send('Hello from the backend');
});

const userRouter  = require('./routes/users');

app.use('/users',userRouter);

const storeRouter  = require('./routes/store');

app.use('/store',storeRouter);






app.listen(port,(req,res)=>{
    console.log(`Server listening to port ${port}`);
});