var User = require('../models/user');

const user = async (req, res, next) => {
    const usr = {
      username,
      password
    } = req.body
  
    const newUser = await User.create(usr).then(e => {
      return e
    })
  
    res.send(newUser);
}
module.exports.user = user

// 

const getuser = async (req, res, next) => {
    const getUser = await User.find().then(e => {
      return e
    })
  
    res.send(getUser);
}
module.exports.getuser = getuser
