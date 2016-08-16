app.controller("MainController", function($scope, $firebaseObject) {
 $scope.view = 'Hello';
});

app.controller('DashboardController', function($scope, $firebaseObject) {
  var firebaseRef = new Firebase(
    'https://smarthomedenver.firebaseio.com/doors'
  );
  $scope.data = $firebaseObject(firebaseRef);
  $scope.view = 'Dashboard Controller';
});
