/*app.config(['$routeProvider',function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'pages/home.html',
        controller: 'homeController'
      }).
      when('/products', {
        templateUrl: 'pages/productlist.html',
        controller: 'productController'
      }).
      when('/products/:productId', {
        templateUrl: 'pages/productdetails.html',
        controller: 'productDetailsController'
      }).
      when('/about', {
        templateUrl: 'pages/about.html',
        controller: 'aboutController'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);*/


app.config( ['$stateProvider','$urlRouterProvider',function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider
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
        .state('login', {
            url: '/login}',
            templateUrl: 'pages/login.html',
            controller: 'loginController'
        })

}]);

app.run(['$state','$rootScope','$location', '$urlRouter','$cookieStore', '$http',function ($state,$rootScope,$location, $urlRouter,$cookieStore,$http) {
  
     /*$rootScope.$on('$locationChangeSuccess', function(e) {
           $urlRouter.sync();
       });*/

     // Configures $urlRouter's listener *after* your custom listener
     //$urlRouter.listen();


     $rootScope.globals = $cookieStore.get('globals') || {};
        if ($rootScope.globals.currentUser) {
            $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
        }
 
        $rootScope.$on('$locationChangeStart', function (event, next, current) {
          debugger;
            // redirect to login page if not logged in and trying to access a restricted page
            var restrictedPage = $.inArray($location.path(), ['/login', '/register']) === -1;
            var loggedIn = $rootScope.globals.currentUser;
            if (restrictedPage && !loggedIn) {
                $state.go('login');
            }
        });

    }]);
