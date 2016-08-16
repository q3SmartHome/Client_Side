app.controller("MainController", function($scope, $firebaseObject) {
 $scope.view = 'Hello';
});

app.controller("SignupController", function($scope, factory) {
 $scope.view = {};
 $scope.addUser = factory.addUser;
 $scope.users = factory.users();
});

app.controller("LoginController", function($scope) {
 $scope.view = 'Login';
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
  $scope.data3 = $firebaseObject(firebaseDoors);

  $scope.view = 'Dashboard Controller';
});
