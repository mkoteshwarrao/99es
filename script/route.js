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


app.config( ['FacebookProvider','$stateProvider','$urlRouterProvider',function(FacebookProvider,$stateProvider, $urlRouterProvider) {

     var myAppId = '1712910572328799';
     FacebookProvider.init(myAppId);
     $urlRouterProvider.deferIntercept();

    $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'pages/home.html',
            controller: 'loginController'
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

}]).run(function ($rootScope, $urlRouter, Facebook) {
  
     $rootScope.$on('$locationChangeSuccess', function(e) {
       // UserService is an example service for managing user state
       if (Facebook.getLoginStatus()) return;
  
       // Prevent $urlRouter's default handler from firing
       e.preventDefault();
        $scope.$broadcast('login');
      // Facebook.getLoginStatus().then(function() {
         // Once the user has logged in, sync the current URL
         // to the router:
       //  $urlRouter.sync();
       //});
     });
  
     // Configures $urlRouter's listener *after* your custom listener
     $urlRouter.listen();
    });;
