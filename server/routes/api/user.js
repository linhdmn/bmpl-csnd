var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var md5 = require('md5');
var cors = require('cors');
// var VerifyToken = require(__root + 'auth/VerifyToken');

router.use(bodyParser.urlencoded({ extended: true }));
var User = require('../../schema/user');



router.post('/login',cors(), function(req, res){
    User.findOne({email:req.body.email},
        function (err, user) {
            if (err) return res.status(500).send( "There was a problem finding the users.");
            // res.status(200).send(users);
            if(user !== undefined && md5(req.body.password) === user.password){
                
                res.status(200).send({
                    message  : "Login successfully!",
                    user : {
                        userID: user._id,
                        email: user.email,
                        role: user.role
                    }
                });

            }
            else{
                res.status(401).send("Wrong username or password!");
            }
            
    });
});

router.post('/register',cors(),function (req, res) {
    console.log("===========[register]=========");
    console.log(req.body.email);
    console.log(req.body.password);

    User.find({email:req.body.email},
        function (err, users) {
            if (err) return res.status(500).send({
                message : "There was a problem finding the users."
            });
            // res.status(200).send(users);
            if(users[0] === undefined){
                User.create({
                    email :req.body.email,
                    password: md5(req.body.password),
                    role: req.body.role
                }, function(error, doc){
                    if(error) return res.status(401).send("Error when create user!" + error);
                    return res.status(200).send(doc);
                })
            }
            else{
                //console.log(users[0].password);
                console.log(users[0].idUser);
                res.status(500).send("Username existed!");
            }

        });
});

router.get('/', function(req, res){
    User.find({}, function(err, docs){
        if(err) return res.status(500).send("error with databse");
        return res.status(200).send(docs);
    })
})



module.exports = router;