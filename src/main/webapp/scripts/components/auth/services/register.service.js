'use strict';

angular.module('devopsTaskApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


