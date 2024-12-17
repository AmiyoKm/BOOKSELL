
const { Router } = require('express');

const { login , register } = require('./user.controller');

const userRouter = Router();

userRouter.post('/register', register);
userRouter.post('/login', login);



module.exports = userRouter;