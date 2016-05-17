(function() {
    'use strict';
    angular.module('masterService', [])
        .factory('m_service', ['$http', '$q', function($http, $q) {

            var deferObject,
                myMethods = {
                    call: function(_service, _method, _params) {

                        var Indata = {
                            'service': _service,
                            'method': _method,
                            'payload': _params
                        };

                        var promise = $http.post('services/cinterface.php', Indata),
                            deferObject = deferObject || $q.defer();

                        promise.then(

                            function(res) {
                                deferObject.resolve(res);
                            },

                            function(failure) {
                                deferObject.reject(failure);
                            });

                        return deferObject.promise;
                    },
                    loadJson: function(url) {
                        
                        var promise = $http.post(url),
                            deferObject = deferObject || $q.defer();

                        promise.then(

                            function(res) {
                                deferObject.resolve(res);
                            },

                            function(failure) {
                                deferObject.reject(failure);
                            });

                        return deferObject.promise;
                    }

                };
            return myMethods;
        }]);
})();
