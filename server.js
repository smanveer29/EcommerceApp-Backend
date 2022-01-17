import mysql from 'mysql';
const con=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',// if macOS then password="root"
    database:'ecommerce' //name of the database in your phpMyAdmin
})
con.connect(function(error){
    if(error) console.log(error)
    else console.log('Connected')
})

export default con 