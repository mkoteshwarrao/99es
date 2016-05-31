app.controller('twoFieldSubCategoryController', ['$scope', '$modal', '$http', 'appconstant', 'twoFieldMasterServices',

    function productController($scope, $modal, $http, appconstant, twoFieldMasterServices) {

        $scope.Object = {}
        $scope.Object.id = "";
        $scope.Object.category_id = "";
        $scope.Object.description = "";
        $scope.Object.bundle = "";
        $scope.Object.status = "";


        $scope.products = {};
        $scope.categories = {};
        $scope.myModal = $scope.myModal | {};
        $scope.selectedCategory;
        $scope.selectedSubCategory;

        $scope.loadCategories = function() {
            $scope.getCategory = twoFieldMasterServices.getCategory();
            $scope.getCategory.then(

                function(items) {
                    $scope.categories = items.data;
                    $scope.selectedCategory = $scope.categories[0];
                    $scope.loadSubCategories();
                },

                function(failure) {
                    debugger;
                }
            );
        } /*init end*/

        $scope.loadSubCategories = function() {
            $scope.clear();
            $scope.getProducts = twoFieldMasterServices.getSubCategoryByKey($scope.selectedCategory.id);
            $scope.getProducts.then(
                function(items) {
                    debugger;
                    $scope.products = items.data;
                    $scope.mainGridOptions.data = $scope.products;
                },
                function(reason) {
                    debugger;
                }
            );
        };

        $scope.selectSubCategory = function(item) {
            debugger;
            //$($event.currentTarget).addClass("selected").siblings().removeClass("selected");
            $scope.selectedSubCategory = item;
        }

        $scope.deleteItem = function(item) {
            alert("deleteItem :");
        }

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
            var res = twoFieldMasterServices.updateSubCategory($scope.selectedSubCategory);
            res.then(
                function(result) {
                    debugger;
                    if (parseInt(result.data) == 1) {
                        alert("record updated");
                        $scope.loadSubCategories();
                        $scope.clear();
                    }

                },

                function(reason) {

                }
            );
        };

        $scope.clear = function() {
            $scope.selectedSubCategory = {};
            $scope.selectedSubCategory.category_id = $scope.selectedCategory.id || null;
        }

        $scope.mainGridOptions = {
            data: {},
            rowdelete:true,
            columns: [{
                field: "id",
                title: "ID",
                hide: false
            }, {
                field: "category_id",
                title: "category",
                width: "120px"
            }, {
                field: "description",
                title: "Description",
                width: "120px"
            }, {
                field: "status",
                title: "Status",
                width: "120px"
            }]
        };

    }
]);
