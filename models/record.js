var mongoose = require('mongoose'); 
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;
 
var RecordSchema = new Schema({
    id    : ObjectId,
    key     : String,
    url      : String
});

mongoose.model('Record', RecordSchema);