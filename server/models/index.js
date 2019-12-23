exports = module.exports = function(app, mongoose) {
    require('./candidate')(app, mongoose);
    require('./key')(app, mongoose);
    require('./result')(app, mongoose);
};
