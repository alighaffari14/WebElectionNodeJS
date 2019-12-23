app.controller('resultController', function($scope,requestService,$resource,toaster) {

    function getResult(){
        requestService
            .getResult()
            .get({},function(res){
                res.$promise.then(function(data){
                    $scope.resultList = data.responseData;
                })
            });
    }
    getResult();

    $scope.export = function(){
        $(".table2excel").table2excel({
            exclude: ".noExl",
            name: "ACM Election Result",
            filename: "acmElectionResult",
            fileext: ".xls",
            exclude_img: true,
            exclude_links: true,
            exclude_inputs: true
        });

    };


});
