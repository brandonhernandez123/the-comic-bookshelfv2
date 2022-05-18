const Router = require('express').Router()
const User = require('../controllers/UserController')

Router.get('/allusers', User.GetUsers)
Router.get('/myprofile/:user_id', User.singleUser)
// Router.get('/user/:user_id', User.oneUser)
Router.post('/newuser', User.NewUser)
Router.put('/updateuser/:user_id', User.updateUser)
Router.delete('/deleteuser/:user_id', User.deleteUser)

module.exports = Router
