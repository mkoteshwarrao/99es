app.controller('loginController', ['$scope', '$state', 'authenticationService','$modal',
    function productController($scope, $state, authenticationService,$modal) {

        var lg = $scope;
        lg.dataLoading = false;
        lg.init = function() {

            authenticationService.ClearCredentials();
        }


        lg.login = function(value) {
            lg.dataLoading = true;
            
            authenticationService.Login(lg.username, lg.password, function(response) {
                if (response.success) {
                    debugger;
                    $state.go('home');

                } else {
                    $state.go('login');
                }
                lg.dataLoading = false;
            });

        };

        lg.logout = function() {

                 $scope.myModal = $modal({
                        scope: $scope,
                        templateUrl: 'pages/confirmLogoutModel.html',
                        show: true,
                        backdrop: 'static'
                });

                $scope.myModal.$promise.then($scope.myModal.show); 
        }; 

        $scope.ok = function() {
            $scope.myModal.$promise.then($scope.myModal.hide);
             authenticationService.LogOut(function(response) {
                        $state.go('login');
             });
        }; 

        $scope.cancel = function() {
            $scope.myModal.$promise.then($scope.myModal.hide);

        }; 

    }
]);