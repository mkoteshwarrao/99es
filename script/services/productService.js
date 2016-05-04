app.service('productsService', ['$http', '$q', function($http, $q) {

    var products = {};

    var deferObject,
        myMethods = {

            getProducts: function() {
                debugger;
                var promise = $http.get('data/products.json'),
                    deferObject = deferObject || $q.defer();

                promise.then(

                    function(res) {
                        products = res;
                        deferObject.resolve(res);
                    },

                    function(failure) {

                        deferObject.reject(failure);
                    });

                return deferObject.promise;
            },

            getProduct: function(value) {
                 debugger;
                var promise = $http.get('data/products.json'),
                    deferObject = deferObject || $q.defer();

                promise.then(

                    function(res) {

                        angular.forEach(res.data.products, function(item) {

                            if (item.id == value) {

                                deferObject.resolve(item);

                            }
                        });
                    },

                    function(failure) {

                        deferObject.reject(failure);
                    });

                return deferObject.promise;
            }

        };

    return myMethods;

}]);
