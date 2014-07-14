angular.module('app')
.controller('LoginCtrl', function ($scope, UserSvc, $location) {
  $scope.login = function (username, password) {
    UserSvc.login(username, password)
    .success(function (user) {
      $scope.$emit('login', user)
      $location.path('/')
    })
    .error(function () {
      $scope.error = 'Invalid Login'
    })
  }
})
