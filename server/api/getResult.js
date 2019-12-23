exports = module.exports = function(app, mongoose) {
    app.api.getResult= function (req, res) {

        app.api.callback.res = res;

        console.log('API : getResult');

        app.db.models.result.find({})
            .populate('president general_secretary treasurer key')
            .exec(function(err,result){
                app.api.callback(err, result);
            });
    };
};

