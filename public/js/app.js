angular.module("homeApp", [
  "firebase",
  "ui.router",
  "homeApp.SignupService",
  "homeApp.LoginService"
])
.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/home');

  $stateProvider
      .state('home', {
          url: '/home',
          templateUrl: 'partials/home.html',
          controller: 'MainController'
      })
      .state('dashboard', {
        url: '/dashboard',
        templateUrl: 'partials/dashboard.html',
        controller: 'DashboardController'
      });
});
