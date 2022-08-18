import express from "express"

const myrouter = express.Router()

//Post Method
myrouter.post('/post', (req, res) => {
    res.send('Post API')
})

//Get all Method
myrouter.get('/getAll', (req, res) => {
    res.send('Get All API')
})

//Get by ID Method
myrouter.get('/getOne/:id', (req, res) => {
    res.send('Get by ID API')
})

//Update by ID Method
myrouter.patch('/update/:id', (req, res) => {
    res.send('Update by ID API')
})

//Delete by ID Method
myrouter.delete('/delete/:id', (req, res) => {
    res.send('Delete by ID API')
})

export default myrouter;