app.controller('menuController', 
	function mainController($cookieStore, $rootScope, $state, $scope, menuService) {

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
        $state.go(menuitem.url);
        $rootScope.currentmenu = menuitem
        $cookieStore.put('currentmenu', $rootScope.currentmenu);
        $("#wrapper").toggleClass("active");
        
    };




});
