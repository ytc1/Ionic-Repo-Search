
app3.controller('repoSearchController', function($scope, $http) {
 
    $scope.getData = function(user) {
    console.log('here');
        $http.get("https://api.github.com/users/"+user+"/repos")
            .success(function(data) {
                $scope.type = data.type;
                $scope.page = data.page;
                $scope.perpage = data.perpage;
                $scope.sort = data.sort;
            })
            .error(function(data) {
                alert("ERROR");
            });
    }
 
});