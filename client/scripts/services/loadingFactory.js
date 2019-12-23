app.factory('loadingFactory',function($rootScope,$timeout) {
    var isTo=true;
    $rootScope.obj = {};
    return{

        'request': function (config) {
            if(isTo) {
                $rootScope.obj.globalLoading=true;
            }
            return config;
        },
        'response': function (config) {
            if(!isTo){
                isTo=true;
            }
            $rootScope.obj.globalLoading=false;
            return config;
        },
        'responseError': function (config) {
            $rootScope.obj.globalLoading=false;
            return config;
        },
        'cancelLoader':function(){
            isTo=false;
        }
    }
});