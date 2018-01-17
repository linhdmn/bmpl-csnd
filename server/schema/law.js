import { Stream } from 'stream';

var mongoose = require('mongoose');  
var LawSchema = new mongoose.Schema({
    tittle:{
        type: String,
        required: true,
    },
    subtittle:{
        type: String
    },
    content:{
        type: Text,
        required: true
    },
    description:{
        type: String
    },
    organization:{
        type: String,
        required: true
    },
    time:{
        type: Date,
        required: true
    }
});


mongoose.model('law', LawSchema);
module.exports = mongoose.model('law');