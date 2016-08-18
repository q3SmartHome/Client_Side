angular
  .module("homeApp")
  .controller("DashboardController", DashboardController);

  DashboardController.$inject = ["$scope", "$firebaseObject", "LoginService", "WeatherService"];

  function DashboardController ($scope, $firebaseObject, LoginService, WeatherService){
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

    $scope.weatherData = WeatherService.getWeather();

    $scope.user = LoginService.getUser();

  }
