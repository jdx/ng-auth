angular.module('app')
.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true)
  $urlRouterProvider.otherwise('/')

  $stateProvider
  .state('posts', {
    url: '/',
    controller: 'PostsCtrl',
    templateUrl: '/assets/partials/posts.html'
  })
  .state('register', {
    url: '/register',
    controller: 'RegisterCtrl',
    templateUrl: '/assets/partials/register.html'
  })
})
