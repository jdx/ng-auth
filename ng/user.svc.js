angular.module('app')
.service('UserSvc', function ($http) {
  this.create = function (user) {
    return $http.post('/api/user', user)
  }
})
