const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());


const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'expertscloud' 
})

app.get('/', (req, res)=> {
    const sql = "SELECT * FROM task";
    db.query(sql, (err, data)=> {
        if(err) return res.json(err);
        return res.json(data);
    })
})

app.post('/create', (req, res)=>{
    const sql = "INSERT INTO task (`id`, `taskassigner`, `taskname`) VALUES (?)";
    const values = [
        '',
        req.body.creatername,
        req.body.description
    ]
    db.query(sql, [values], (err, data)=>{
        if(err) return res.json(err);
        return res.json("created");
    })
})

app.put('/update/:id', (req, res)=>{
    const sql = "UPDATE task set `taskassigner` = ?, `taskname` = ? WHERE id = ?";
    const id = req.params.id;
    const values = [
        req.body.creatername,
        req.body.description
    ]
    db.query(sql, [...values, id], (err, data)=>{
        if(err) return res.json(err);
        return res.json("Updated");
    })
})


app.delete('/delete/:id', (req, res)=>{
    const sql = "DELETE FROM task WHERE id = ?";
    const id = req.params.id;
    
    db.query(sql, [id], (err, data)=>{
        if(err) return res.json(err);
        return res.json("Deleted");
    })
})

app.listen(8081, ()=>{
    console.log("Listening")
})