'use strict';

var AvailabilityStrategy = function() {

    return function(storesQuery, productsQuery) {
        var options = {
            path: '/',
            qs: {}
        };

        if (typeof storesQuery !== 'string') {
            return new Error('First parameter of "availability" must be a string');
        }

        if (typeof productsQuery !== 'string') {
            return new Error('Second parameter of "availability" must be a string');
        }

        if (arguments.length === 3) {
            options.qs = arguments[2];
        }
        if (arguments.length > 3) {
            return new Error('Unrecognized parameter length when calling "availability" method');
        }

        if (!options.qs.show) {
            options.qs.show = 'all';
        }

        options.path = '/stores(' + storesQuery + ')+products(' + productsQuery + ')';

        // Execute request
        return options;
    };
};

module.exports = AvailabilityStrategy;
