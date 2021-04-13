const db = require("./db")

async function doRegister(req,res) {
    const { name, userName , email, birthday, password, password2 } = req.body;
    let errors = [];

    db.query(
        "INSERT INTO accounts (name, userName, email, birthday, password) VALUES (?,?,?,?,?)",
        [name, userName, email, birthday, password],
        (err,result) => {
            console.log(err)
        }
    )
}

async function doLogin(req,res){
    const { userName , password } = req.body

    db.query(
        "SELECT 8 FROM user WHERE userName = ? AND password = ?"
        [userName, password],
        (err, result) => {
            if(err) {
                res.send({ err:err })
            } 

            if (result.length > 0){
                res.send(result)
            } else {
                res.send({ message: "wrong login information"})
            }
        }
    )
}

module.exports = { doRegister , }