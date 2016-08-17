(function(){
  angular.module("homeApp",[])
    .controller("MainController", MainController)

    MainController.$inject = ["$scope", "LoginService", "SignupService"];

    function MainController($scope, LoginService, SignupService) {
      console.log("main controller");

      $scope.addUser = function(username, password, zip, phone){
        SignupService.createUser(username, password, zip, phone)
        console.log("logging in");
      }
    }
})();
