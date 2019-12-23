exports = module.exports = function(app, mongoose) {

    'use strict';
    var Schema = mongoose.Schema;

    var CandidateSchema = new Schema({
        name                     : String
    });

    app.db.model('candidate',CandidateSchema);

};

