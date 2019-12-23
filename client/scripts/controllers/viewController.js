app.controller('viewController', function($scope,requestService,$resource,toaster) {

    $scope.submitDisabled = false;

    $scope.data = {
        sid:null,
        name:null,
        email:null,
        key:null,
        president:null,
        general_secretary:null,
        treasurer:null

    };

    function getCandidates(){
        requestService
            .getCandidates()
            .get({},function(res){
                res.$promise.then(function(data){
                    $scope.candidateList = data.responseData;
                })
            });
    }
    getCandidates();

    $scope.submit = function(){

        var valid = ($scope.data.sid
                    && $scope.data.name
                    && $scope.data.email
                    && $scope.data.key
                    && $scope.data.president
                    && $scope.data.general_secretary
                    && $scope.data.treasurer);

        if(valid){

            requestService
                .submitResult()
                .save({
                        data: $scope.data
                    },
                    function(res){
                        $scope.submitDisabled = true;
                        res.$promise.then(function(res){
                            if(res.success){
                                $scope.data = {
                                    sid:null,
                                    name:null,
                                    email:null,
                                    key:null,
                                    president:null,
                                    general_secretary:null,
                                    treasurer:null

                                };
                                console.log(res);
                                toaster.pop('success', "Success", res.responseData);
                                $scope.submitDisabled = false;
                            }else {
                                $scope.submitDisabled = false;
                                toaster.pop('error', "Error", res.error);
                            }
                        });
                    });

        }else {
            toaster.pop('error', "Error", "Empty or Invalid Input");
        }
    };

});