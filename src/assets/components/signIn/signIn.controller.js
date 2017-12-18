(function () {
    
'use strict';

angular
    .module('app')
    .controller('SignInController', SignInController);

    SignInController.$inject = ['$scope', '$http', '$mdDialog','$sce'];

function SignInController($scope, $http, $mdDialog, $sce) {

    $mdDialog.show({
        controller: DialogController,
        templateUrl: 'views/signIn.html',
        clickOutsideToClose:false
      })
          
}

function DialogController($scope, $http, $sce){
 
    //BO
    var BO = new SignInBusiness($http);

    $scope.next = false;
    $scope.success = false;
    $scope.data = [];

    $scope.nextPage = function(){
        $scope.next = !$scope.next;
    };
 
    $scope.finishPlan = function(data){
        console.log(data);
        $scope.success = !$scope.success;
    };

    $scope.trustHtml = function(html){
         return  $sce.trustAsHtml(html);
    }

    //Setando valores da API
    var setData = function(data){
        $scope.plans = data.plans;
        console.log(data.plans)
    }

    function init() {
        BO.getData(setData);
    }

    init();
}
})();
    