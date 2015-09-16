(function(){
    'use strict';

    angular.module('mindBurstApp', [
        'ui-router',
        'mindBurstApp.user',
        'ngMock'
    ]);

})();;(function(){
    'use strict';

    angular.module('mindBurstApp.user', []);
})();;(function() {

    'use strict';

    var UserCtrl = function(UserService) {
        // TODO: define user behaviors
        this.user = UserService.get();
    };

    angular.module('mindBurstApp.user')
        .controller('UserCtrl', ['UserService', UserCtrl]);
})();;(function(){

    angular.module('mindBurstApp.user')

        .service('UserService', function() {

            var services = {};

            var user = {
                name: ['Gary', 'Johnson'],
                age: '28',
                location: ['Oakland', 'CA'],
                interests: ['music', 'javascript', 'love', 'relationships']
            }

            services.get = function(){
                return user;
            }

            return services;
        });
})();