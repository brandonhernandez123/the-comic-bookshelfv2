const { Users, myComics, reviewedComics } = require('../models')

const GetUsers = async (req, res) => {
  try {
    const users = await Users.findAll()
    res.send(users)
  } catch (error) {
    throw error
  }
}

const NewUser = async (req, res) => {
  try {
    const newUser = await Users.create(req.body)
    res.send(newUser)
  } catch (error) {
    throw error
  }
}

async function GetOneUser(req, res) {
  try {
    const users = await Users.findByPk(req.params.user_id, {
      attributes: ['username', 'email', 'password_digest'],
      include: [
        {
          model: myComics
        }
      ]
    })
    res.send(users)
  } catch (error) {
    throw error
  }
}

// const oneUser = async (req, res) => {
//   try {
//     const user = await Users.findByPk(req.params.user_id)
//     res.send(user)
//   } catch (error) {
//     throw error
//   }
// }

const deleteUser = async (req, res) => {
  try {
    await Users.destroy({ where: { id: req.params.user_id } })
    res.send({
      msg: 'Profile deleted successfully',
      payload: req.params.user_id,
      status: 'Ok'
    })
  } catch (error) {
    throw error
  }
}

const updateUser = async (req, res) => {
  try {
    const updateUser = await Users.update({
      where: { id: req.params.user_id },
      returning: true
    })
    res.send(updateUser)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetUsers,
  NewUser,
  GetOneUser,
  deleteUser,
  updateUser
  // oneUser
}
