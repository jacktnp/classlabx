var userCheckin = require('../models/checkin');

const user = async (req, res, next) => {
    const usrchk = {
      userid,
      nickname,
      section,
      room,
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
    const getUser = await userCheckin.find().sort({userid: 1}).then(e => {
      return e
    })
  
    res.send(getUser);
}
module.exports.getuser = getuser

// 

const getuserbysec1 = async (req, res, next) => {
  const getUser1 = await userCheckin.find({section: 1}).sort({userid: 1}).then(e => {
    return e
  })

  res.send(getUser1);
}
module.exports.getuserbysec1 = getuserbysec1

// 

const getuserbysec2 = async (req, res, next) => {
  const getUser2 = await userCheckin.find({section: 2}).sort({userid: 1}).then(e => {
    return e
  })

  res.send(getUser2);
}
module.exports.getuserbysec2 = getuserbysec2

// 

const getuserbysec3 = async (req, res, next) => {
  const getUser3 = await userCheckin.find({section: 3}).sort({userid: 1}).then(e => {
    return e
  })

  res.send(getUser3);
}
module.exports.getuserbysec3 = getuserbysec3
