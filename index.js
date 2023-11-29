import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv'
import UserRouter from './routes/user.js';
import ProductRouter from './routes/product.js'

const app=express()
app.use(cors())
const PORT=5000
const CONNECTION_URL='mongodb+srv://pravee_krish:praveenak1911@cluster0.tnhbe9l.mongodb.net/?retryWrites=true&w=majority'




app.use(bodyParser.json({limit:"30mb",extended:true}))
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}))


app.use('/addUser',UserRouter)
app.use('/product',ProductRouter)
app.get('/', (req, res) => {
    res.status(200).send(`<h1>PRAVEE!!!!</h1>`)
})





mongoose.connect(CONNECTION_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
.then(()=>app.listen(PORT,console.log("you are listening on port: " + PORT)))
.catch((err)=>console.log(`Error connecting :${err}`))


