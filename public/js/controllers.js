app.controller("MainController", function($scope, $firebaseObject, factory) {
  $scope.view = [];
  $scope.addUser = factory.addUser;
  $scope.users = factory.users();
});

app.controller('DashboardController', function($scope, $firebaseObject) {
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

  // $scope.tempAlert = function() {
  //   if (data.fahrenheit > 75 || data.fahrenheit < 65) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  // $scope.doorAlert = function(data2) {
  //   if (data2.doors = "closed") {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }
});
