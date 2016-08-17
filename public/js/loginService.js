(function() {
  angular
  .module("homeApp.LoginService", [])
  .service('LoginService', LoginService);

  LoginService.$inject = ['$http', '$location']

  function LoginService($http, $location) {
    var user = {};

    return{
      loginUser: loginUser,
      getToken: getToken,
      getUserId: getUserId
    };
    //function to get JWT token
    function getToken(){
      return user.token
    };

    function setUserData(data){
      user = data
    };

    function getUserId(){
      return user.userId
    };

    function loginUser(username, password){
      $http({
        method: 'POST',
        params:{
          username: username,
          password: password
        },
        url: 'http://localhost:3000/auth/login'
      })
      .then(function(response){
        setUserData(response.data);
        $location.path('/dashboard')
      }, function(err){
        return err;
      });
    }
  }
})();
