angular.module('app')
.controller('RegisterCtrl', function ($scope, $rootScope, UserSvc) {
  $scope.register = function (user) {
    UserSvc.create(user).success(function (user) {
      $rootScope.$broadcast('login', user)
    })
  }
})
