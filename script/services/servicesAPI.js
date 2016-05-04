(function () {
	'use strict';
	angular.module('servicesAPI', [])
		.factory('cpc', [function () {
			var localStorageKeyName = 'loginuser';

			return {
				getToken: function () {
					var val = window.localStorage.getItem(localStorageKeyName);
					var getAuthTokenDetails;
					if (val) {
						getAuthTokenDetails = JSON.parse(val);
					}
					return (getAuthTokenDetails && getAuthTokenDetails.token);
				},
				setToken: function (token) {
					window.localStorage.setItem(localStorageKeyName, JSON.stringify({
						'token': token,
						'tokenHeaderName': 'x-catalyst-auth'
					}));
				},
				removeToken: function () {
					window.localStorage.removeItem(localStorageKeyName);
				},
				isLoggedIn: function () {
					return !!this.getToken();
				},
				isToeknSyncWithServer: function () {
					return this.getToken();
				},
				getHeaderObject: function () {
					var val = window.localStorage.getItem(localStorageKeyName);
					var getAuthTokenDetails;
					if (val) {
						getAuthTokenDetails = JSON.parse(val);
					}
					return getAuthTokenDetails && {'headers': {"x-catalyst-auth": getAuthTokenDetails.token}};
				}
			};
		}
	]);
})();