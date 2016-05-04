app.controller('loginController', ['$scope', '$location', 'authenticationService',
    function productController($scope, $location, authenticationService) {

               var vm = $scope;
                $scope.init = function () {
                    debugger;
                    authenticationService.ClearCredentials();      
                }

                $scope.login = function(value) {
                         debugger;
                        vm.dataLoading = true;
                        authenticationService.Login(vm.username, vm.password, function (response) {
                            debugger;
                            if (response.success) {
                                authenticationService.SetCredentials(vm.username, vm.password);
                                $location.path('/');
                            } else {
                                FlashService.Error(response.message);
                                vm.dataLoading = false;
                            }
            });

                };
    }]);
