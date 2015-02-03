'use strict';

/* Controllers */

var userControllers = angular.module('userControllers', []);

userControllers.controller('userListCtrl', ['$scope', 'Phone',
  function($scope, Phone) {
    $scope.phones = Phone.query();
  }]);