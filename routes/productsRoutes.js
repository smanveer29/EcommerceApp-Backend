import express from 'express';
import con from '../server.js'
const router=express.Router();
router.get('/list-products',(req, res) =>{
    con.query('Select * from products',(err,result)=>{
        if(err) res.jsonp({status:false,error:err})
        else{
            if(result.length > 0) res.jsonp({status:true,data:result})
            else res.jsonp({status:false,error:'No Products Found'})
            res.end();
        }
    })
})
export default router