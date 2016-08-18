(function(){
  angular
    .module("homeApp")
    .service('SignupService', SignupService);

    SignupService.$inject = ['$http', 'LoginService']

    function SignupService($http) {
      return {
        createUser: createUser
      };

      function createUser(username, password, zip, phone){
        $http({
          method:'POST',
          params:{
            username: username,
            password:password,
            zip: zip,
            phone: phone
          },
          url: "http://localhost:3000/auth/signup"
        }).then(function(reponse){
          LoginService.loginUser(username, password);
        }, function(err){
          return err;
        });
      }
    }
})();
