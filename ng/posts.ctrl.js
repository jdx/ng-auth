angular.module('app')
.controller('PostsCtrl', function ($scope, PostsSvc) {
  PostsSvc.fetch().success(function (posts) {
    $scope.posts = posts
  })

  $scope.create = function (post) {
    $scope.post = null
    PostsSvc.create(post).success(function(post) {
      $scope.posts.unshift(post)
    })
  }

  $scope.$on('login', function (_, user) {
    console.log(user)
  })
})
