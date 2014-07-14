angular.module('app')
.controller('ApplicationCtrl', function ($scope, $window) {
  $scope.$on('login', function (_, user) {
    $scope.currentUser = user
    $window.localStorage.token = user.token
  })
})
