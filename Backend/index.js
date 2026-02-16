const express = require('express');
const bodyParser = require("body-parser");
const { use } = require('react');
const app = express();
const port = 8000;

app.use(bodyParser.json());

let users = []


//path = GET /users
app.get('/users', (req, res) => {
    let user = {
        res.json(users);
});

//path = POST /user
app.post('/user', (req, res) => {
    let user = req.body;
    users.push(user);
    res.json({
        message: 'User added successfully',
        user:  user});
})

//path = PUT /user/:id
app.patch('/user/:id', (req, res) => {
    let id = req.params.id
    let updateUser = req.body;
    // หา users จาก id 
    let selectedIndex = users.findIndex(user => {
        if (user.id == id) {
            return true
        } else{
            return false
        }
    })

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