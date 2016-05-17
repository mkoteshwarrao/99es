app.service('twoFieldMasterServices', ['m_service', function(m_service) {

    var myMethods = {

            getSubCategoryByKey: function(key) {

                var payload = {
                        'key':key
                    };

               return m_service.call('twofieldmasters_s','gettwofieldslist',payload)
            },
        };

    return myMethods;

}]);
