(function(){
  angular
    .module("homeApp")
    .service("WeatherService", WeatherService);

    WeatherService.$inject = ["$http", "LoginService", "$q"];

    function WeatherService($http, LoginService, $q) {
      var weather = {};

      // return {
      //   getWeather: getWeather,
      //   getHumidity: getHumidity
      // };


 //    function getWeather(){
 //
 //      $http({
 //        method:'GET',
 //        params:{
 //          zip: LoginService.getZip()
 //        },
 //        headers: {
 //            Authorization: 'Bearer ' + LoginService.getToken()
 //        },
 //        url: "http://localhost:3000/weather"
 //        // url: "https://smart-home-api-server.herokuapp.com/weather"
 //      })
 //      .then(function(data) {
 //        weather = data.data.response[0].periods[1];
 //      });
 // //    }
 //
 //    function getHumidity(){
 //      return weather.humidity
 //    }
 }
})();
