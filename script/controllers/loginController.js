app.controller('loginController', ['$scope', '$state', 'authenticationService',
    function productController($scope, $state, authenticationService) {

               var lg = $scope;
                lg.init = function () {
                    
                    authenticationService.ClearCredentials();
                }

                 
                lg.login = function(value) {
                          
                        lg.dataLoading = true;
                        authenticationService.Login(lg.username, lg.password, function (response) {
                            if (response.success) {
                                debugger;
                                $state.go('home');
                                 
                            } else {
                                $state.go('login');
                            }
                        });

                };

               lg.logout = function() {
                        authenticationService.LogOut( function (response) {
                                $state.go('login');
                        });

                };
    }]);
