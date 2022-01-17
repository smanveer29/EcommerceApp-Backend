import express from 'express';
import mysql from 'mysql';
import userRoutes from './routes/userRoutes.js'
import productsRoutes from './routes/productsRoutes.js'
import bodyParser from 'body-parser';
import './server.js'
const app= express();
const PORT=5000
app.use(bodyParser.json({type: 'application/json'}))
app.use(bodyParser.urlencoded({extended:true}))
// const con=mysql.createConnection({
//     host:'localhost',
//     user:'root',
//     password:'',
//     database:'notify'
// })
app.listen(PORT,()=>{
    console.log(`Server running At http://localhost:${PORT}`)
})

// con.connect(function(error){
//     if(error) console.log(error)
//     else console.log('Connected')
// })
app.use('/users',userRoutes)
app.use('/products',productsRoutes)