app.service('twoFieldMasterServices', ['m_service', function(m_service) {

    var myMethods = {

            getSubCategoryByKey: function(key) {

                var payload = {
                        'key':key
                    };

               return m_service.call('twofieldmasters_s','gettwofieldslist',payload)
            },
            getCategory: function() {

                var payload = {
                        'key':0
                    };

               return m_service.call('twofieldmasters_s','getTwoCategoryList',payload)
            },
            updateSubCategory:function(subCategory){
                var payload = {
                        'data':subCategory
                    };

                return m_service.call('twofieldmasters_s','updateSubCategory',payload)
            }
        };

    return myMethods;

}]);
