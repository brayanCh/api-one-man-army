const User = require("../models/users");


const GetAllUsers = async (req, res ) => {

    User.find({}, (err, result) => {
        err ? console.log(err)
        : res.json(result);
    });
}


const CreateUsr = async (req, res) => {
    
    try{
        let usr = new User({
            mail: req.body.mail, 
            identification: req.body.identification, 
            completeName: req.body.completeName, 
            passwdHash: req.body.passwdHash, 
            rol: req.body.rol, 
            state: "pendiente"
        })
        await usr.save();
        res.status(200).send('user created');
    }
    catch(err)
    {
        console.log(err);
        res.status(404).send('Not found');
    }

}


 const x = {
    GetAllUsers: GetAllUsers,
     CreateUsr: CreateUsr
 };

module.exports = x;
