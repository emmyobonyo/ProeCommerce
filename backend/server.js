import express from 'express'
import connectDB from './config/db.js';
import dotenv from 'dotenv'
import productRoutes from './routes/productRoutes.js';

dotenv.config();    

connectDB();

const app= express()

app.use('/api/products', productRoutes)

app.get('/', (req, res) => {
    res.send('API is running .......')
})

const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`Server running on port ${PORT} and mode ${process.env.NODE_ENV}`))