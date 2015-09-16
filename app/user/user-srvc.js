(function(){

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