var mongoose = require('mongoose');
var formSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    exam:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    status:{
        type:String,
        default:"false"
    }
    
});

var Form = mongoose.model('Form',formSchema);

module.exports = Form;