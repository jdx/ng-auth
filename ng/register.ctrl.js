angular.module('app')
.controller('RegisterCtrl', function ($scope, $location, UserSvc) {
  $scope.register = function (user) {
    UserSvc.create(user).success(function (user) {
      $scope.$emit('login', user)
      $location.path('/')
    })
  }
})
