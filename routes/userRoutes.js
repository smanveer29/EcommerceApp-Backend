import express from 'express';
import con from '../server.js'
const router=express.Router();

router.get('/list', (req, res)=>{
    con.query('SELECT * FROM users',(rows,err,fields)=>{
        if(err) res.send(err)
        else {
            res.send(rows)
            console.log("RGet")
        }
    })
})
router.post('/register',(req, res)=>{
    if(req.body.name && req.body.email && req.body.password && req.body.address){
        con.query(`INSERT INTO users (name,email,password,address) VALUES ('${req.body.name}','${req.body.email}','${req.body.password}','${req.body.address}')`,(error,result)=>{
            if(error) 
            {
                res.jsonp({status:false,error:error.sqlMessage})
                res.end();
            }
            else{
                    res.jsonp({status:true,data:req.body})
                    res.end();
            }
        })
    }
    else{
        res.jsonp({status:false,data:'Please Fill All credential'})
        res.end
    }
})
router.post('/login',(req,res)=>{
    if(req.body.email && req.body.password){
        con.query(`Select * FROM users WHERE email='${req.body.email}' and password='${req.body.password}'`,(error,result)=>{
            if(error){
                res.jsonp({status:false,error:error.sqlMessage})
                res.end();
            }
            else{
                if(result.length > 0){
                    res.jsonp({status:true,data:result[0]})
                    res.end();
                }
                else{
                    res.jsonp({status:false,error:'Invalid Email and password'})
                    res.end();
                }
            }
        })
    }
})
export default router;