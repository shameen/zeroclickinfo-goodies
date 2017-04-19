DDH.jasmine_calculator = DDH.jasmine_calculator || {};

(function(DDH) {
    "use strict";

    function _addThree (a, b, c) {
        var t = jasmine_calculator.add(a, b);
        return jasmine_calculator.add(t, c)
    }

    var jasmine_calculator = {
        add: function(a, b) {
            return a + b;
        },
        subtract: function(a, b) {
            return a - b;
        },
        addThree: _addThree
    };

    DDH.jasmine_calculator.build = function(ops) {

        return {

            meta: {
                sourceName: 'Source Domain',
                sourceUrl: 'https://source.website.com'
            },

            data: {
                title: "Hello World!",
                subtitle: "What's up?"
            },

            templates: {
                group: 'text'
            }
        };
    };

    module.exports = jasmine_calculator

})(DDH);
