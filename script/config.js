app.config(['FacebookProvider','$urlRouterProvider',function(FacebookProvider,$urlRouterProvider) {
     var myAppId = '1712910572328799';
     
     // You can set appId with setApp method
     // FacebookProvider.setAppId('myAppId');
     
     /**
      * After setting appId you need to initialize the module.
      * You can pass the appId on the init method as a shortcut too.
      */
     FacebookProvider.init(myAppId);

     $urlRouterProvider.deferIntercept();
     
    }
]).run(function ($rootScope, $urlRouter, loginController) {
  
     $rootScope.$on('$locationChangeSuccess', function(e) {
       // UserService is an example service for managing user state
       if (loginController.isLoggedIn()) return;
  
       // Prevent $urlRouter's default handler from firing
       e.preventDefault();
  
       loginController.IntentLogin().then(function() {
         // Once the user has logged in, sync the current URL
         // to the router:
         $urlRouter.sync();
       });
     });
  
     // Configures $urlRouter's listener *after* your custom listener
     $urlRouter.listen();
    });