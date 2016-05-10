(function() {
'use strict';

angular.module('configAPI', [])
    .constant("appconstant", {
        'SERVICES': {
            'LOGIN_SERVICE': {
                'NAME': 'login',
                'METHODS': {
                    'LOGIN': 'loginuser',
                    'LOGOUT': 'logoutuser'
                }
            },
            
            'TWO_FIELD_MASTER_SERVICE': {
                'NAME': 'twofieldmasters_s',
                'METHODS': {
                    'LOGIN': 'gettwofieldslist'
                }
            }

        }
    });

})();
