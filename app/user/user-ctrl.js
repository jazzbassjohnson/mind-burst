(function() {

    'use strict';

    var UserCtrl = function(UserService) {
        // TODO: define user behaviors
        this.user = UserService.get();
    };

    angular.module('mindBurstApp.user')
        .controller('UserCtrl', ['UserService', UserCtrl]);
})();