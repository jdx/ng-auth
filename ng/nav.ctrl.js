angular.module('app')
.controller('NavCtrl', function ($scope) {
  $scope.logout = function () {
    $scope.$emit('logout')
  }
})
