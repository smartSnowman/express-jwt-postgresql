const config = require("../config/auth.config");
const { User } = require("../helper/auth.helper");

var jwt = require("jsonwebtoken");

exports.signin = (req, res) => {
  try{
    const { username, password } = req.body;
    const usernameIsValid = User.filter(row => row.username === username);

    if (!usernameIsValid.length) {
      return res.status(404).send({ message: "User Not found." });
    }

    const passwordIsValid = usernameIsValid.filter(row => row.password === password);
    if (!passwordIsValid.length) {
      return res.status(401).send({
        accessToken: null,
        message: "Invalid Password!"
      });
    }

    const user = {...passwordIsValid[0]};
    const token = jwt.sign({ id: user.id, role: user.role },
      config.secret,
      {
        algorithm: 'HS256',
        allowInsecureKeySizes: true,
        expiresIn: 86400, // 24 hours
      });

    res.status(200).send({
      id: user.id,
      username: user.username,
      roles: user.role,
      accessToken: token
    });
  }
  catch(err){
    res.status(500).send({ message: err.message });
  }
};
