app.config(function($stateProvider, $urlRouterProvider){

    $urlRouterProvider.otherwise("/login");

    $stateProvider

        .state('main', {
            url: '/main',
            views: {
                "":{
                    templateUrl: 'app/src/page-blocks/layouts/main/l-main.html',
                    controller: 'l-main.controller'
                },
                "header@main": {
                    templateUrl: 'app/src/page-blocks/layouts/main/l-header.html',
                    controller: 'l-header.controller'
                },
                "chats@main": {
                    templateUrl: 'app/src/page-blocks/layouts/main/l-chats.html',
                    controller: 'l-chats.controller'
                },
                "dialog@main": {
                    templateUrl: 'app/src/page-blocks/layouts/main/l-dialog.html',
                    controller: 'l-dialog.controller'
                },
                "event@main": {
                    templateUrl: 'app/src/page-blocks/layouts/main/l-event.html',
                    controller: 'l-event.controller'
                }
            }
        })
        .state('login', {
            url: '/login',
            views: {
                "": {
                    templateUrl: 'app/src/blocks/page-blocks/layouts/l-login/l-login.html',
                    controller: 'l-login'
                },
              "login@login": {
                templateUrl: 'app/src/blocks/page-blocks/layouts/l-login/l-login.form.html',
                controller: 'l-login'
              },
                "fastReg@login": {
                templateUrl: 'app/src/blocks/page-blocks/layouts/l-login/l-fast-registration.html',
                controller: 'l-fast-registration'
              },
            }
        })
});
