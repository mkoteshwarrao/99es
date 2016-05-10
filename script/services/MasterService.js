(function() {
        'use strict';
        angular.module('masterService', ['configAPI'])
            .factory('m_service', [function() {

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
                                        products = res;
                                        deferObject.resolve(res);
                                    },

                                    function(failure) {

                                        deferObject.reject(failure);
                                    });

                                return deferObject.promise;
                            }
                        };
                    return myMethods;
                ]);
            })();
