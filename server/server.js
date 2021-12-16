const express = require ('express')
const cors = require('cors')


const app = express()
app.use(cors('*'))
app.use(express.json())


const productRouter = require('./product')
app.use('/product', productRouter)

app.listen(4000, ()=>{
    console.log('server started on port 4000')
})
