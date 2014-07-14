angular.module('app')
.controller('PostsCtrl', function ($scope, PostsSvc) {
  function reload () {
    PostsSvc.fetch().success(function (posts) {
      $scope.posts = posts
    })
  }
  reload()

  $scope.create = function (post) {
    $scope.post = {}
    PostsSvc.create(post).success(reload)
  }
})
