_ = require 'lodash'

app = angular.module 'rileyShows', []
app.controller 'mainController', ($scope, $http) ->
  $scope.shows = {}
  $scope.dorian = 'home'

  # Get shows
  $http.get '/shows'
    .success (data, status, headers, config) ->
      console.log data.shows
      $scope.shows = data.shows
