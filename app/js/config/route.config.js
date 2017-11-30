app.config(function($stateProvider, $urlRouterProvider){ 
                                                                                                                 
    $urlRouterProvider.otherwise("/view-1"); 
        
    $stateProvider
    
        .state('view-1', { 
            url: '/view-1',
            views: {
                "viewA": {
                    templateUrl: 'app/src/page-blocks/layouts/...',  
                    controller: 'view-1A.controller'
                },
                "viewB": {
                    templateUrl: 'app/src/page-blocks/layouts/...',  
                    controller: 'view-1B.controller'
                }
            }
        })
        
        .state('view-2', { 
            url: '/view-2', 
            views: {
                "viewA": {
                    templateUrl: 'app/src/page-blocks/layouts/...',  
                    controller: 'view-2.controller'
                },
                "viewB": {
                    templateUrl: 'app/src/page-blocks/layouts/...',  
                    controller: 'view-2.controller'
                }
            }            
        })
      
        .state('view-3', {
            url: '/view-3',
            templateUrl: 'app/src/blocks/page-blocks/layouts/...',
            controller: 'view-3.controller'
        })

});

app.filter('trustUrl', function ($sce) {
    
    return function(url) {
        return $sce.trustAsResourceUrl(url);
    };

});