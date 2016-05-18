app.config( ['$stateProvider','$urlRouterProvider',function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state('login', {
            url: '/login',
            templateUrl: 'pages/login.html',
            controller: 'loginController'
        })
        .state('home', {
            url: '/home',
            templateUrl: 'pages/home.html',
            controller: 'homeController'
        })
        .state('about', {
            url: '/about',
            templateUrl: 'pages/about.html',
            controller: 'aboutController'
        })
        .state('products', {
            url: '/products',

            views: {
                '': {
                    templateUrl: 'pages/productlist.html',
                    controller: 'productController'
                },
                '/{productId}': {
                    templateUrl: 'pages/productdetails.html',
                    controller: 'productDetailsController'
                }
            }
        })
        .state('products/{productId}', {
            url: '/products/{productId}',
            templateUrl: 'pages/productdetails.html',
            controller: 'productDetailsController'
        })


}]);

app.run(['$location','$rootScope','$state','authenticationService','$urlRouter','$cookieStore',
  function ($location,$rootScope,$state,authenticationService,$urlRouter,$cookieStore) {

        $rootScope.authorization = $cookieStore.get('authorization') || {};
        $rootScope.location = $location;
        $rootScope.$on('$stateChangeStart', function (event, next, current) {

            $rootScope.location = $location;
            var currentmenu = $cookieStore.get('currentmenu')
            if (next.name != 'login' && !authenticationService.isLoggedin()) {
                event.preventDefault();
                 debugger;
                $state.go('login');
            }
            else if (next.name == 'login' && authenticationService.isLoggedin())
            {
                 event.preventDefault();
                 
                 if(currentmenu.url){
                    $state.go(currentmenu.url); 
                 }else{
                     $state.go('home');
                    $rootScope.$broadcast('setmenuitem', "home");
                 }

            }else{
                if(!currentmenu.url != next.name){
                  $rootScope.$broadcast('setmenuitem', next.name);
                }
            }

             
        });

    }]);
