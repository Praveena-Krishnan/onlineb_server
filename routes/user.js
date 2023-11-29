import express from 'express';
import { createUser, findUser, findLoginUser } from '../controllers/user.js';
const router = express.Router()


// http://localhost:5000/addUser

router.post('/',createUser)
// http://localhost:5000/addUser/user/

router.get('/user/:email',findUser)
// http://localhost:5000/addUser/login/user/email/password
router.get('/login/user/:email/:password',findLoginUser)





export default router
