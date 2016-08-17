(function(){
  angular
    .module("homeApp.signupService", [])
    .service('signupService', signupService);

    signupService.$inject = ['$http']

    function signupService($http) {

    }
})();
