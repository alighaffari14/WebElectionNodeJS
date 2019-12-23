exports = module.exports = function (app) {

    app.get('/api/getCandidates', app.api.getCandidates);
    app.post('/api/insertCandidate', app.api.insertCandidate);

    app.post('/api/insertKey', app.api.insertKey);


    app.get('/api/getResult', app.api.getResult);
    app.post('/api/submitResult', app.api.submitResult);


    app.get('*', function(req, res) {
        res.sendfile('./client/index.html'); // load the single view file (angular will handle the page changes on the front-end)
    });


};