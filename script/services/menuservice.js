app.service('menuService', ['m_service', function(m_service) {

    var menu = {};

    var myMethods = {

            getMenu: function() {
                    return m_service.loadJson('data/menu.json');
            }

        };

    return myMethods;

}]);
