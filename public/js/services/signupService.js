(function(){
  angular
    .module("homeApp")
    .service('SignupService', SignupService);

    SignupService.$inject = ['$http', 'LoginService']

    function SignupService($http, LoginService) {
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
          // url: "https://smart-home-api-server.herokuapp.com/auth/signup"
        }).then(function(reponse){
          LoginService.loginUser(username, password, zip, phone);
        }, function(err){
          return err;
        });
      }
    }
})();
