exports = module.exports = function(app, mongoose) {
    app.api.submitResult = function (req, res) {

        app.api.callback.res = res;


        //var obj = {
        //    "name"                : "Arhan",
        //    "email"               : "arhan@gmail.com",
        //    "sid"                 : "1234",
        //    "chairman"            : "Arhan",
        //    "vice_chairman"       : "Arhan",
        //    "general_secretary"   : "Arhan",
        //    "deputy_secretary"    : "Arhan",
        //    "key"                 : "Arhan"
        //};


        console.log('API : submitResult');


        var data = req.body.data;

        var valid = true;
        for (var key in data) {

            if(!data[key]){
                console.log(data[key]);
                valid = false;
                break;
            }

        }

        if(valid){

            app.db.models.key.findOne({key:data.key}, function (err, key) {

               console.log("key");
               console.log(key);
                if (err) {
                    app.api.callback(err);
                }
                else if(key && (key.isValid === true)){

                    var result = new app.db.models.result();
                    result.name = data.name;
                    result.email = data.email;
                    result.sid = data.sid;
                    result.president = data.president;
                    result.general_secretary = data.general_secretary;
                    result.treasurer = data.treasurer;
                    result.key = key._id;
                    result.ip = req.connection.remoteAddress;



                    result.save(function(err,data){
                        if(err) {
                            console.log("error in saving the data");
                            app.api.callback(err);
                        }
                        else{

                            key.isValid = false;

                            key.save(function(err,data){
                                if(err) {
                                    console.log("error in saving the data");
                                    app.api.callback(err);
                                }else {
                                    app.api.callback(null, "Thank you for casting your vote");
                                }
                            });

                        }
                    });


                    //app.api.callback(null, "valid Key");
                    //app.api.callback(null, "Thank you for casting your vote");
                }
                else {
                    app.api.callback("Invalid or Expired Key");
                }
            });



        }else {
            app.api.callback("Invalid or Empty Input");
        }



    };
};


