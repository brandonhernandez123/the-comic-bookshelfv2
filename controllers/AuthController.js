const { Users } = require('../models')
const middleware = require('../middleware')

const Login = async (req, res) => {
  try {
    const user = await Users.findOne({
      where: { email: req.body.email },
      raw: true
    })
    if (
      user &&
      (await middleware.comparePassword(
        user.password_digest,
        req.body.password
      ))
    ) {
      let payload = {
        id: user.id,
        email: user.email
      }
      let token = middleware.createToken(payload)
      return res.send({ user: payload, token })
    }
    res.status(401).send({ status: 'Error', msg: 'Unauthorized' })
  } catch (error) {
    throw error
  }
}

const SignUp = async (req, res) => {
  try {
    const { email, password, username } = req.body
    let password_digest = await middleware.hashPassword(password)
    const user = await Users.create({
      email,
      password_digest,
      username
    })
    res.send({ user })
  } catch (error) {
    throw error
  }
}

const UpdatePassword = async (req, res) => {
  try {
    const { oldPassword, newPassword } = req.body
    const user = await Users.findByPk(req.params.user_id)
    if (
      user &&
      (await middleware.comparePassword(
        user.dataValues.password_digest,
        oldPassword
      ))
    ) {
      let password_digest = await middleware.hashPassword(newPassword)
      await user.update({ password_digest })
      return res.send({ status: 'Ok', payload: user })
    }
    res.status(401).send({ status: 'Error', msg: 'Unauthorized' })
  } catch (error) {
    throw error
  }
}

const CheckSession = async (req, res) => {
  try {
    const { payload } = res.locals
    const user = await Users.findByPk(payload.id, {
      attributes: ['id', 'username', 'email']
    })
    res.send(user)
  } catch (error) {
    throw error
  }
}

module.exports = {
  Login,
  SignUp,
  UpdatePassword,
  CheckSession
}
