const express = require('express')
const app = express()
const connectDb = require('./db/conn')
const route = require('./route/materialRoute')
const routequantity= require('./route/QuantityRoute');
const port =process.env.PORT || 9000
app.use(express.json())

const DB_URL ="mongodb://localhost:27017"
connectDb(DB_URL)
app.use('/uploads',express.static('uploads'));
app.use(route)
app.use(routequantity)

app.listen(port,()=>{
    console.log(`connnecte ${port}`);
})