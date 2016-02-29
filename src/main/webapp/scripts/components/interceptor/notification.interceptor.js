 'use strict';

angular.module('devopsTaskApp')
    .factory('notificationInterceptor', function ($q, AlertService) {
        return {
            response: function(response) {
                var alertKey = response.headers('X-devopsTaskApp-alert');
                if (angular.isString(alertKey)) {
                    AlertService.success(alertKey, { param : response.headers('X-devopsTaskApp-params')});
                }
                return response;
            }
        };
    });
