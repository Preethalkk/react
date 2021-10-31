const express=require("express");
const app=express();
const mysql=require("mysql")
const cors=require('cors')

app.use(cors());
app.use(express.json())

const db=mysql.createConnection({
user:"root",
host:"localhost",
password:"",
database:"registerSystem"
});

app.post('/create', (req, res)=>{
    console.log(req.body);
    const name=req.body.name;
    const standard=req.body.standard;
    const schoolname=req.body.schoolname;
    const parentname=req.body.parentname;
    const guardianname=req.body.guardianname;
    const bookname=req.body.bookname;

    db.query("INSERT INTO  register(name,standard,schoolname,parentname,guardianname,bookname) VALUES(?,?,?,?,?,?)",[name, standard, schoolname, parentname, guardianname, bookname],(err,result)=>{
        if (err){
            console.log(err);
        }
        else{
            res.send("Values Inserted");
        }
        }
     );

    });

app.get('/students', (req,res)=>{
db.query("SELECT * FROM students",(err, result)=>{
    if (err){
        console.log(err);
    }
    else{
        res.send(result)
    }
    
    })

})


app.listen(3001, ()=>{
    console.log("yeah server is running!!!!");
});