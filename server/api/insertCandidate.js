exports = module.exports = function(app, mongoose) {
    app.api.insertCandidate = function(req,res){

        app.api.callback.res = res;

        console.log('API : api/insertCandidate');
        console.log(req.body);

        var candidate_array = req.body.name;

        for(var i=0; i < candidate_array.length; i++){
            var candidate = new app.db.models.candidate();
            candidate.name = candidate_array[i];
            candidate.save(function(err,data){
                if(err) {
                    console.log("error in saving the data");
                    app.api.callback(err);
                }
            });
        }
        app.api.callback(null,"true");
    };
};

