var app = angular.module("homeApp", ["firebase", "ui.router"]);

app.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/home');

  $stateProvider
      .state('home', {
          url: '/home',
          templateUrl: 'partials/home.html',
          controller: 'MainController'
      })
      // .state('signup', {
      //   url: '/home/signup',
      //   templateUrl: 'partials/signup.html',
      //   controller: 'SignupController'
      // })
      // .state('login', {
      //   url: '/home/login',
      //   templateUrl: 'partials/login.html',
      //   controller: 'LoginController'
      // })
      .state('dashboard', {
        url: '/dashboard',
        templateUrl: 'partials/dashboard.html',
        controller: 'DashboardController'
      });
});
