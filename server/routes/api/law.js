var express = require('express');
var request = require('request');
var router = express.Router();
var bodyParser = require('body-parser');
var md5 = require('md5');
var cors = require('cors');
// var VerifyToken = require(__root + 'auth/VerifyToken');

router.use(bodyParser.urlencoded({ extended: true }));
var Law = require('../../schema/law');

router.post('/addlaw', cors(), function(req, res){
    Law.find({tittle:req.body.tittle}, function(err, doc){
        if(err) return res.status(500).send("error with database" + err);
        else if(!doc){
            Law.create({
                tittle: req.body.tittle,
                subtittle: req.body.subtittle,
                content: req.body.content,
                description: req.body.description,
                organization: req.body.organization,
                time: req.body.time
            }, function(error, result){
                if(error) return res.status(500).send(error);
                return res.status(200).send(result);
            })
        }
        else return res.status(404).send("law exist!");
    })
});

router.get('/getlaw', cors(), function(req, res){
    if(req.params.id !== null){
        Law.findById({_id:req.params.id},
        function(err, doc){
            if(err) return res.status(500).send("error database findById");
            return res.status(200).send(doc);
        })
    }
    else{
        Law.find({}, function(err, doc){
            if(err) return res.status(500).send("error database findById");
            return res.status(200).send(doc); 
        })
    }
})

router.delete('/deletelaw', cors(), function(req, res){
    Law.findOneAndRemove({tittle: req.body.tittle, number: req.body.number},
    function(err, doc){
        if(err) return res.status(500).send("Error when access database!");
        return res.status(200).send("Delete success!");
    });
})

router.put('/updatelaw', cors(), function(req, res){
    Law.findOneAndUpdate({number: req.body.number},{
        tittle: req.body.tittle,
        subtittle: req.body.subtittle, 
        content: req.body.content,
        description: req.body.description,
        organization: req.body.organization,
        time: req.body.time},
    function(err, doc){
        if(err) return res.status(500).send("error with database");
        return res.status(200).send(doc);
    })
})

module.exports = router;