 'use strict';

angular.module('cabinetApp')
    .factory('notificationInterceptor', function ($q, AlertService) {
        return {
            response: function(response) {
                var alertKey = response.headers('X-cabinetApp-alert');
                if (angular.isString(alertKey)) {
                    AlertService.success(alertKey, { param : response.headers('X-cabinetApp-params')});
                }
                return response;
            }
        };
    });
