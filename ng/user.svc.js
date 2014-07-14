angular.module('app')
.service('UserSvc', function ($http, $window) {
  this.create = function (user) {
    return $http.post('/api/user', user)
  }
  this.login = function (username, password) {
    return $http.post('/api/login', {
      username: username,
      password: password
    })
  }

  this.setUser = function (user) {
    if (user) {
      $window.localStorage.token = user.token
      $http.defaults.headers.common['x-auth'] = user.token
    } else {
      delete $window.localStorage.token
      delete $http.defaults.headers.common['x-auth']
    }
  }

  this.isLoggedIn = function () {
    return !!$window.localStorage.token
  }

  if (this.isLoggedIn()) {
    $http.defaults.headers.common['x-auth'] = $window.localStorage.token
  }

  this.getUser = function () {
    return $http.get('/api/user')
  }

  this.findUser = function (username) {
    return $http.get('/api/users/' + username)
  }
})
