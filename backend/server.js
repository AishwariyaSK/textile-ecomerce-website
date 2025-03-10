import express, { json } from 'express';
import cors from 'cors';
import dotenv from 'dotenv/config';
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/userRoutes.js';
import productRouter from './routes/productRoutes.js';
import cartRouter from './routes/cartRoutes.js';
import orderRouter from './routes/orderRoutes.js';

// app config
const app=express()
const port=process.env.PORT || 4000;
connectDB()
connectCloudinary()

// middleware
app.use(json())
app.use(cors())


// router
app.use('/api/user',userRouter)
app.use('/api/product',productRouter)
app.use('/api/cart',cartRouter)
app.use('/api/order',orderRouter)

// create server
app.get('/', (req,res)=>{
    res.send("API working")
})

app.listen(port,()=>console.log('sever running on port:'+port))