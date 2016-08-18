angular
  .module("homeApp")
  .controller("DashboardController", DashboardController);

  DashboardController.$inject = ["$scope", "$firebaseObject", "LoginService", "WeatherService", "$http"];

  function DashboardController ($scope, $firebaseObject, LoginService, WeatherService, $http){
    var firebaseTemperature = new Firebase(
      'https://smarthomedenver.firebaseio.com/temperature'
    );
    $scope.data = $firebaseObject(firebaseTemperature);

    var firebaseDoors = new Firebase(
      'https://smarthomedenver.firebaseio.com/doors'
    );
    $scope.data2 = $firebaseObject(firebaseDoors);

    var firebaseLights = new Firebase(
      'https://smarthomedenver.firebaseio.com/lights'
    );
    $scope.data3 = $firebaseObject(firebaseLights);

    $scope.view = 'Dashboard Controller';

    // $scope.weatherdata = WeatherService.getWeather()

    $scope.user = LoginService.getUser();

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
      console.log(data.data.response[0].periods)
      $scope.weatherData = data.data.response[0].periods
  })
}
