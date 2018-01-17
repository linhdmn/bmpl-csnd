var mongoose = require('mongoose');  
var LawSchema = new mongoose.Schema({
    lawId:{
        type: Number,
        required: true
    },
    tittle:{
        type: String,
        required: true,
    },
    subtittle:{
        type: String,
        required: true
    },
    number:{
        type: Number,
        required: true
    },
    description:{
        type: String
    },
    organization:{
        type: String,
        required: true
    },
    content:{
        type: Array,
        required: true
    },
    time:{
        type: Date,
        required: true
    }
});


mongoose.model('law', LawSchema);
module.exports = mongoose.model('law');