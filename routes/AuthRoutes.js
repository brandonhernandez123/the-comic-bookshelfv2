const router = require('express').Router()
const controller = require('../controllers/AuthController')
const middleware = require('../middleware')

router.post('/auth/login', controller.Login)
router.post('/auth/register', controller.SignUp)
// router.put('/profile', controller.UpdatePassword)
router.get(
  '/auth/session',
  middleware.stripToken,
  middleware.verifyToken,
  controller.CheckSession
)
module.exports = router
