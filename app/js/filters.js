'use strict';

/* Filters */

angular.module('userFilters', []).filter('checkmark', function() {
  return function(input) {
    return input;
  };
});
