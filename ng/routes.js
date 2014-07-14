angular.module('app')
.config(function ($routeProvider, $locationProvider) {
  $locationProvider.html5Mode(true)

  $routeProvider
  .when('/', {
    controller: 'PostsCtrl',
    templateUrl: '/assets/partials/posts.html'
  })
  .when('/register', {
    controller: 'RegisterCtrl',
    templateUrl: '/assets/partials/register.html'
  })
  .when('/login', {
    controller: 'LoginCtrl',
    templateUrl: '/assets/partials/login.html'
  })
  .when('/users/:username', {
    controller: 'ProfileCtrl',
    templateUrl: '/assets/partials/profile.html'
  })
})
