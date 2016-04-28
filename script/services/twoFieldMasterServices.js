app.service('twoFieldMasterServices', ['$http', '$q', function($http, $q) {

    var products = {};

    var deferObject,
        myMethods = {

            getProducts: function() {

            var Indata = {
                'service' : 'twofieldmasters_s',
                'method' : 'gettwofieldslist',
                'payload': {
                    'key':1000
                }
            };

                var promise = $http.post('services/cinterface.php',Indata),
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
                var promise = $http.get('data/products.json'),
                    deferObject = deferObject || $q.defer();

                promise.then(

                    function(res) {
debugger;
                        angular.forEach(res.data.products, function(item) {

                            if (item.id == value) {

                                deferObject.resolve(item);

                            }
                        });
                    },

                    function(failure) {
debugger;
                        deferObject.reject(failure);
                    });

                return deferObject.promise;
            }

        };

    return myMethods;

}]);
