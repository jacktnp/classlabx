var userCheckin = require('../models/checkin');

const user = async (req, res, next) => {
    const usrchk = {
      userid,
      nickname,
      section,
      lab
    } = req.body
  
    const newUser = await userCheckin.create(usrchk).then(e => {
      return e
    })
  
    res.send(newUser);
}
module.exports.user = user

// 

const getuser = async (req, res, next) => {
    const getUser = await userCheckin.find().then(e => {
      return e
    })
  
    res.send(getUser);
}
module.exports.getuser = getuser
