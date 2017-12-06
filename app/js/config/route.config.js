app.config(function($stateProvider, $urlRouterProvider){

    $urlRouterProvider.otherwise("/test");

    $stateProvider

        .state('loginPage', {
            url: '/loginPage',
            views: {
                "login": {
                    templateUrl: 'app/src/blocks/page-blocks/layouts/l-login/l-login.form.html',
                    controller: 'l-login.controller'
                },
                "socialBtn": {
                    templateUrl: 'app/src/blocks/page-blocks/layouts/l-login/l-fast-registration.html',
                    controller: 'l-fast-registration.controller'
                }
            }
        })

        .state('test', {
            url: '/test',
            views: {
                "login": {
                  templateUrl: 'app/src/blocks/page-blocks/layouts/l-login/l-login.html',
                  controller: 'l-login.controller'
                },
                "buttons": {
                    templateUrl: 'app/src/blocks/page-blocks/layouts/l-login/l-test-buttons.html',
                    controller: 'l-test-buttons.controller'
                }
            }
        })
});
