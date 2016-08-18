(function(){
  angular
    .module("homeApp")
    .service("WeatherService", WeatherService);

    WeatherService.$inject = ["$http", "LoginService"];

    function WeatherService($http, LoginService) {
      return {
        getWeather: getWeather
      };


    function getWeather(){
      $http({
        method:'GET',
        params:{
          zip: LoginService.getZip()
        },
        headers: {
            Authorization: 'Bearer ' + LoginService.getToken()
        },
        url: "http://localhost:3000/weather"
        // url: "https://smart-home-api-server.herokuapp.com/weather"
      })
      .then(function(data) {
        return data.response[0];
      });
    }
 }
})();
