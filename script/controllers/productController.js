app.controller('productController', ['$scope', '$modal', '$http', 'twoFieldMasterServices',

    function productController($scope, $modal, $http, productsService) {

        $scope.Object = {}
        $scope.Object.id = "";
        $scope.Object.title = "";
        $scope.Object.image = "";
        $scope.Object.price = "";
        $scope.Object.color = "";
        $scope.Object.info = "";


        $scope.products = {};
        $scope.myModal = $scope.myModal | {};
 
        $scope.getProducts = productsService.getProducts();

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

            $scope.getProduct = productsService.getProduct(value);
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

        $scope.hideModal = function() {
            $scope.myModal.$promise.then($scope.myModal.hide);
        };

        $scope.addProduct = function() {
            if (!$scope.Object.id) {
                $scope.Object.id = $scope.products.length; /*this will add duplicate ids in reality */
                $scope.products.push($scope.Object);
            }

            $scope.Object = {};
        };

        $scope.editProduct = function(item) {
            $scope.Object = new Object(item);
        };

    }
]);
