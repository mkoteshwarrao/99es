app.controller('productController', ['$scope', '$modal', '$http','appconstant','twoFieldMasterServices',

    function productController($scope, $modal, $http,appconstant, twoFieldMasterServices) {

        $scope.Object = {}
        $scope.Object.id = "";
        $scope.Object.category_id = "";
        $scope.Object.description = "";
        $scope.Object.bundle = "";
        $scope.Object.status = "";


        $scope.products = {};
        $scope.myModal = $scope.myModal | {};

        $scope.getProducts = twoFieldMasterServices.getProducts();

        $scope.getProducts.then(

            function(items) {

                debugger;
                $scope.products = items.data;

            },

            function(reason) {
                debugger;
            }
        );

        $scope.showDetails = function(value) {

            $scope.getProduct = twoFieldMasterServices.getProduct(value);
            $scope.getProduct.then(

                function(item) {
                    debugger;
                    $scope.item = item;
                    $scope.myModal = $modal({
                        scope: $scope,
                        templateUrl: 'pages/pdetails.html',
                        show: true,
                        backdrop: 'static'
                    });

                    $scope.myModal.$promise.then($scope.myModal.show);

                },

                function(reason) {

                }
            );
        };

        $scope.editSubCategory = function() {
            debugger
            $scope.Object;
        };

    }
]);
