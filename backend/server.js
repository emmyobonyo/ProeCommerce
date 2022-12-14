import express from 'express'
import connectDB from './config/db.js';
import dotenv from 'dotenv'
import productRoutes from './routes/productRoutes.js';

dotenv.config();    

connectDB();

const app= express()

app.get('/', (req, res) => {
    res.send('API is running .......')
})

app.use('/api/products', productRoutes)

app.use((err, req, res, next) => {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode
    res.status(statusCode)
    res.json({
        message: err.message,
        stack: process.env.NODE_ENV === 'production'? null : err.stack, 
    })

})

const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`Server running on port ${PORT} and mode ${process.env.NODE_ENV}`))