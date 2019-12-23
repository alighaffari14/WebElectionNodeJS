exports = module.exports = function(app, mongoose) {

    'use strict';
    var Schema = mongoose.Schema;
    var ObjectId = mongoose.Schema.Types.ObjectId;

    var ResultSchema = new Schema({
        name                     : String,
        email                    : String,
        sid                      : String,
        president                : {type: ObjectId, ref: 'candidate'},
        general_secretary        : {type: ObjectId, ref: 'candidate'},
        treasurer                : {type: ObjectId, ref: 'candidate'},
        key                      : {type: ObjectId, ref: 'key'},
        date                     : { type: Date, default: Date.now },
        ip                       : String
    });

    app.db.model('result',ResultSchema);

};


