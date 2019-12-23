exports = module.exports = function(app, mongoose) {
    app.api.insertKey = function(req,res){

        app.api.callback.res = res;

        console.log('API : api/insertKey');
        console.log(req.body);

        var key_array = req.body.key;

        for(var i=0; i < key_array.length; i++){

            var key = new app.db.models.key();
            key.key = key_array[i];
            key.save(function(err,data){
                if(err) {
                    console.log("error in saving the data");
                    app.api.callback(err);
                }
            });
        }

        app.api.callback(null,true);
    };
};
