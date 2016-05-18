app.controller('mainController', function mainController($rootScope, $scope) {

    $scope.message = "mainController";
    $scope.menuitem =  $scope.menuitem || {};
    $rootScope.$on('menuitemselected', function(event, menuitem) {
         $scope.menuitem = menuitem;
    });
});
