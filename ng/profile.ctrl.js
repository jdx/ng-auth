angular.module('app')
.controller('ProfileCtrl', function ($scope, $routeParams, UserSvc, PostsSvc) {
  PostsSvc.fetchByUser($routeParams.username).success(function (posts) {
    $scope.posts = posts
  })
  UserSvc.findUser($routeParams.username).success(function (user) {
    $scope.user = user
  })
})
