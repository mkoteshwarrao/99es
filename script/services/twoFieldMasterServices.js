app.service('twoFieldMasterServices', ['m_service''$http', '$q', function(m_service,$http, $q) {

    var products = {};

    var deferObject,
        myMethods = {

            getCategoryByKey: function(key) {

                var payload = {
                        'key':key
                    };

               return m_service.call('twofieldmasters_s','gettwofieldslist',payload)
            },
        };

    return myMethods;

}]);
