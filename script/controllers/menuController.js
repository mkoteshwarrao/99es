app.controller('menuController',
    function mainController($location, $cookieStore, $rootScope, $state, $scope, menuService) {

        var mc = $scope;

        mc.message = "mainController";
        mc.menu = mc.menu || {};
        mc.currentmenu = mc.currentmenu || {};
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
            $("#mySidenav").toggleClass("active");
        };

        mc.selectMenu = function(menuitem) {
            $("#mySidenav").toggleClass("active");
            mc.currentmenu = menuitem;
            $state.go(menuitem.url);

        };

        $rootScope.$on('$stateNotFound',
            function(event, unfoundState, fromState, fromParams) {
                console.log(unfoundState.to); // "lazy.state"
                console.log(unfoundState.toParams); // {a:1, b:2}
                console.log(unfoundState.options); // {inherit:false} + default options
            });

        $rootScope.$on('$stateChangeSuccess',
            function(event) {
                $rootScope.currentmenu = mc.currentmenu;
                $cookieStore.put('currentmenu', $rootScope.currentmenu);
                $rootScope.$broadcast('menuitemselected', $rootScope.currentmenu);
            });

    });
