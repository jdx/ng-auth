angular.module('app')
.service('PostsSvc', function ($http) {
  this.fetch = function () {
    return $http.get('/api/posts')
  }

  this.fetchByUser = function (username) {
    return $http.get('/api/users/' + username + '/posts')
  }

  this.create = function (post) {
    return $http.post('/api/posts', post)
  }
})
