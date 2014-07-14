angular.module('app')
.controller('NavCtrl', function ($scope, $rootScope) {
  $scope.login = function() {
    $rootScope.$broadcast('login', {user: 'dickeyxxx'})
  }
})
