app.factory('requestService',function($resource){

    var _getCandidates = function(){
        return $resource('/api/getCandidates');
    };

    var _submitResult = function(){
        return $resource('/api/submitResult');
    };

    var _getResult = function(){
        return $resource('/api/getResult');
    };

    return{
        'getCandidates':_getCandidates,
        'submitResult':_submitResult,
        'getResult':_getResult
}
});
