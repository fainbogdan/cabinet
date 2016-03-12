'use strict';

angular.module('cabinetApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


