exports = module.exports = function(app, mongoose) {
    app.api.getCandidates= function (req, res) {

        app.api.callback.res = res;

        console.log('API : api/getCandidates');


        app.db.models.candidate.find({}, function (err, data) {
            if (err) {
                app.api.callback(err);
            }
            else {
                console.log("data");
                console.log(data);

                app.api.callback(err, data);
            }
        });

    };
};

