angular.module('app')
.controller('ApplicationCtrl', function ($scope, UserSvc) {
  $scope.$on('login', function (_, user) {
    $scope.currentUser = user
    UserSvc.setUser(user)
  })
  $scope.$on('logout', function () {
    $scope.currentUser = null
    UserSvc.setUser(null)
  })

  if (UserSvc.isLoggedIn()) {
    UserSvc.getUser().success(function (user) {
      $scope.$broadcast('login', user)
    })
  }
})
