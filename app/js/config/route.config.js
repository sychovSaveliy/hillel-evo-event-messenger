app.config(function($stateProvider, $urlRouterProvider){

    $urlRouterProvider.otherwise("/login");

    $stateProvider

        .state('main', {
            url: '/main',
            views: {
                "":{
                    templateUrl: 'app/src/blocks/page-blocks/layouts/main/l-main.html',
                    controller: 'main'
                },
                "header@main": {
                    templateUrl: 'app/src/blocks/page-blocks/layouts/main/l-header/l-header.html',
                    controller: 'l-header.controller as ctrl'
                },
                "contactList@main": {
                  templateUrl: 'app/src/blocks/page-blocks/layouts/main/l-contactList/l-contactList.html',
                  controller: 'main.contactList',
                  controllerAs: 'ctrl'
                },
                "chat@main": {
                    templateUrl: 'app/src/blocks/page-blocks/layouts/main/l-chat/l-chat.html',
                    controller: 'l-chat.controller'
                },
                "footer@main": {
                    templateUrl: 'app/src/blocks/page-blocks/layouts/main/l-footer/l-footer.html',
                    controller: 'l-footer.controller'
                },
                "event@main": {
                    templateUrl: 'app/src/blocks/page-blocks/layouts/main/l-event/l-event.html',
                    controller: 'l-event.controller as ctrl'
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
          "test@login": {
            templateUrl: 'app/src/blocks/page-blocks/layouts/l-login/l-test-buttons.html',
            controller: 'l-test-buttons'
          }
        }
      })
      .state('test', {
        url: '/test',
        views: {
          "": {
            templateUrl: 'app/src/blocks/page-blocks/layouts/l-login/l-test-buttons.html',
            controller: 'l-test-buttons'
          }
        }
      })
});
