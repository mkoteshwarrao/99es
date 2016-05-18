app.controller('menuController',
    function mainController($location,$cookieStore, $rootScope, $state, $scope, menuService) {

        var mc = $scope;
        mc.expanded = false;
        mc.message = "mainController";
        mc.menu = mc.menu || {};
        mc.loadMenu = menuService.getMenu();

        mc.loadMenu.then(

            function(menu) {
                debugger;
                mc.menu = menu.data;
            },

            function(reason) {
                debugger;
            }
        );

        mc.toggleMenu = function() {
            $("#wrapper").toggleClass("active");
            mc.expanded = !mc.expanded;
        };

        mc.selectMenu = function(menuitem) {

            $rootScope.currentmenu = menuitem
            $cookieStore.put('currentmenu', $rootScope.currentmenu);
            $("#wrapper").toggleClass("active");
            $rootScope.$broadcast('menuitemselected', $rootScope.currentmenu);
            $state.go($rootScope.currentmenu.url);

        };

        $rootScope.$on('$locationChangeSuccess',
            function(event, url, oldUrl, state, oldState) {
                if ($rootScope.currentmenu.url != url) {

                    angular.forEach(values, function(value, key) {
                    	if(url == value.url){

                    			$rootScope.currentmenu = value
            					$cookieStore.put('currentmenu', $rootScope.currentmenu);
            					$rootScope.$broadcast('menuitemselected', $rootScope.currentmenu);
                    	}
                    });
                }
            });

         $rootScope.$on('setmenuitem',
            function(event,next) {
            	debugger;
                if ($rootScope.currentmenu.url != next) {

                    angular.forEach($rootScope.currentmenu, function(value, key) {
                        if (url == value.url) {

                            $rootScope.currentmenu = value
                            $cookieStore.put('currentmenu', $rootScope.currentmenu);
                            $rootScope.$broadcast('menuitemselected', $rootScope.currentmenu);
                        }
                    });
                }
         });

    });
