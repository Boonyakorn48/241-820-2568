const express = require('express');
const bodyParser = require("body-parser");
const mysql = require('myaql/promis');
const app = express();
const port = 8000;

app.use(bodyParser.json());

let users = []
let counter = 1;
app.get('/testdb', (req, res) => {
    mysql.createConection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'webdb',
        port: 8820
    }).then((conn) => {
        conn.query('SELECT * FROM users')
            .then((results) => {
                res.json(results[0]);
            })
            .catch((err) => {
                console.error('Database query error:', err.message);
                res.status(500).json({ error: 'Database query error' });
            })
    });
});

app.get('/testdb-new', (req, res) => {
    try {
        const connection = mysql.createConection
            
        
    }
})



/**
    GET /users สำหรับ get ข้อมูล users ทั้งหมด
    POST /users สำหรับเพิ่ม user ใหม่
    GET /
    PUT
    DELETE
 */

//path = GET /users
app.get('/users', (req, res) => {
    const filterUsers = users.map(user => {
        return{
            id: user.id,
            firstname: user.firstname,
            lastname: user.lastname,
            fullname: `${users.firstname} ${user.lastname}`
        }
    })
    res.json(filterUsers);
});

//path = POST /user
app.post('/user', (req, res) => {
    let user = req.body;
    users.push(user);
    res.json({
        message: 'User added successfully',
        user:  user});
})

// path GET /users/:id สำหรับ get ข้อมูล user ที่มี id ตรงกับที่ส่งมา
app.get('/users/:id', (req, res) => {
    let id = req.params.id
    let selectedUser = users.findIndex(user => users.id == id)
    res.json(users[selectedUser])
})


//path = PUT /user/:id
app.put('/user/:id', (req, res) => {
    let id = req.params.id
    let updateUser = req.body;
    // หา users จาก id 
    let selectedIndex = users.findIndex(user => user.id ==id )
       
    //update users นั้น
    if(updateUser.name) {
         users[selectedIndex].name = updateUser.name || users[selectedIndex].name
    }
    if(updateUser.age) {
         users[selectedIndex].age = updateUser.age   || users[selectedIndex].age
    }
    
    //ส่ง response กลับไปว่า   update users ที่เลือกสำเร็จ

    res.json({
        message: 'User update successfully', 
        data: {
            user: updateUser,
            indexUpdated: selectedIndex
        }
    }) 
})

app.delete('/user/:id', (req,res) => {
    let id = req.params.id
    let selectedIndex = users.findIndex(user => user.id == id)
    if (selectedIndex !== -1) {
        users.splice(selectedIndex, 1)
        res.json({
            message: 'User deleted successfully',
            data: {
                indexDeleted: selectedIndex
            }
        })
    } else {
        res.status(404).json({
            message: 'User not found'
        })
    }
})


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});