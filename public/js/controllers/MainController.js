(function(){
  angular.module("homeApp")
    .controller("MainController", MainController)
    MainController.$inject = ["$scope", "LoginService", "SignupService"];

    function MainController($scope, LoginService, SignupService) {

      $scope.addUser = function(username, password, zip, phone){
        SignupService.createUser(username, password, zip, phone)
      }

      $scope.loginUser = function(username, password){
        LoginService.loginUser(username, password)
      }
    }
})();
