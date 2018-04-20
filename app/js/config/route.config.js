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
                "content@main": {
                    templateUrl: 'app/src/blocks/page-blocks/layouts/main/l-start.page.html',
                    controller: 'l-start.page'
                },
                "event@main": {
                    templateUrl: 'app/src/blocks/page-blocks/layouts/main/l-event/l-event.html',
                    controller: 'l-event.controller as ctrl'
                }
            }
        })
        .state('chat', {
          url: '/chat/:id',
          views: {
            "":{
              templateUrl: 'app/src/blocks/page-blocks/layouts/main/l-chat.html',
              controller: 'main'
            },
            "header@chat": {
              templateUrl: 'app/src/blocks/page-blocks/layouts/main/l-header/l-header.html',
              controller: 'l-header.controller as ctrl'
            },
            "contactList@chat": {
              templateUrl: 'app/src/blocks/page-blocks/layouts/main/l-contactList/l-contactList.html',
              controller: 'main.contactList',
              controllerAs: 'ctrl'
            },
            "chat@chat": {
              templateUrl: 'app/src/blocks/page-blocks/layouts/main/l-chat/l-chat.html',
              controller: 'l-chat.controller'
            },
            "event@chat": {
              templateUrl: 'app/src/blocks/page-blocks/layouts/main/l-event/l-event.html',
              controller: 'l-event.controller as ctrl'
            }
          },
          params: {
            data: {}
          }
        })
        .state('new-event', {
          url: '/new-event',
            views: {
              "":{
                templateUrl: 'app/src/blocks/page-blocks/layouts/main/l-new.event.html',
                controller: 'main'
              },
              "header@new-event": {
                templateUrl: 'app/src/blocks/page-blocks/layouts/main/l-header/l-header.html',
                controller: 'l-header.controller as ctrl'
              },
              "contactList@new-event": {
                templateUrl: 'app/src/blocks/page-blocks/layouts/main/l-contactList/l-contactList.html',
                controller: 'main.contactList',
                controllerAs: 'ctrl'
              },
              "newevent@new-event": {
                templateUrl: 'app/src/blocks/page-blocks/layouts/main/l-event/l-new.event.html',
                controller: 'l-new.event as ctrl'
              },
              "event@new-event": {
                templateUrl: 'app/src/blocks/page-blocks/layouts/main/l-event/l-event.html',
                controller: 'l-event.controller as ctrl'
              }
            },
            params: {
              data: {}
            }
        })
      .state('view-event', {
        url: '/view-event/:id',
        views: {
          "":{
            templateUrl: 'app/src/blocks/page-blocks/layouts/main/l-new.event.html',
            controller: 'main as ctrl'
          },
          "header@view-event": {
            templateUrl: 'app/src/blocks/page-blocks/layouts/main/l-header/l-header.html',
            controller: 'l-header.controller as ctrl'
          },
          "contactList@view-event": {
            templateUrl: 'app/src/blocks/page-blocks/layouts/main/l-contactList/l-contactList.html',
            controller: 'main.contactList',
            controllerAs: 'ctrl'
          },
          "newevent@view-event": {
            templateUrl: 'app/src/blocks/page-blocks/layouts/main/l-event/l-view.event.html',
            controller: 'l-view.event as ctrl'
          },
          "event@view-event": {
            templateUrl: 'app/src/blocks/page-blocks/layouts/main/l-event/l-event.html',
            controller: 'l-event.controller as ctrl'
          }
        },
        params: {
          data: {},
          id: ''
        }
      })
        .state('calendar', {
          url: '/calendar',
          views: {
            "":{
              templateUrl: 'app/src/blocks/page-blocks/layouts/main/l-calendar.html',
              controller: 'main'
            },
            "header@calendar": {
              templateUrl: 'app/src/blocks/page-blocks/layouts/main/l-header/l-header.html',
              controller: 'l-header.controller as ctrl'
            },
            "contactList@calendar": {
              templateUrl: 'app/src/blocks/page-blocks/layouts/main/l-contactList/l-contactList.html',
              controller: 'main.contactList',
              controllerAs: 'ctrl'
            },
            "calendar@calendar": {
              templateUrl: 'app/src/blocks/page-blocks/layouts/main/l-calendar/l-calendar.html',
              controller: 'calendar.controller'
            },
            "event@calendar": {
              templateUrl: 'app/src/blocks/page-blocks/layouts/main/l-event/l-event.html',
              controller: 'l-event.controller as ctrl'
            }
          },
          params: {
            data: {}
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
        .state('registration', {
          url: '/registration',
          views: {
            "": {
              templateUrl: 'app/src/blocks/page-blocks/layouts/l-registration/l-registration.html',
              controller: 'l-registration'
            },
            "registration@registration": {
              templateUrl: 'app/src/blocks/page-blocks/layouts/l-registration/l-registration.form.html',
              controller: 'l-registration'
            }
          }
        })
      .state('profile', {
        url: '/profile',
        views: {
          "":{
            templateUrl: 'app/src/blocks/page-blocks/layouts/l-profile/l-profile.html',
            controller: 'l-profile as ctrl'
          },
          "header@profile": {
            templateUrl: 'app/src/blocks/page-blocks/layouts/l-profile/l-profile-header.html',
            controller: 'l-profile-header as ctrl'
          },
          "profile@profile": {
            templateUrl: 'app/src/blocks/page-blocks/layouts/l-profile/l-edit-profile.html',
            controller: 'l-edit-profile as ctrl'
          }
        },
        params: {
          data: {}
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
