var app = angular.module('userAPP', []);

app.controller('ListCtrl', function($scope) {
  var json = {
    "customers":
        [
                {
                   "customer_id":"Example_customer_id_1",
                   "company_name":"AT"
                },

                {
                   "customer_id":"Example_customer_id_2",
                   "company_name":"GA"
                }
        ]
  };

  $scope.customers_json = json;
  
  
});
