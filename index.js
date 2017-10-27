var app = angular.module('randomQuote', []);
app.controller('myCtrl', function($scope, $http) {
    $http.get("https://api.whatdoestrumpthink.com/api/v1/quotes/random")
  .then(function(res){
      console.log(res)
      $scope.quote = res.data.message;
    })
});