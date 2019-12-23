exports = module.exports = function(app, mongoose) {

    'use strict';
    var Schema = mongoose.Schema;
    var ObjectId = mongoose.Schema.Types.ObjectId;

    var KeySchema = new Schema({
        key                     : String,
        isValid                 : {type:Boolean,default:true}
    });

    app.db.model('key',KeySchema);

};


