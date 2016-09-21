'use strict';
exports.handler = (event, context) => {

    var request = require('request');
    request.post(
        'YOUR ENDPOINT', //put your endpoint here
        { json: { key: 'value' } },
        function (error, response, body) {
            if (!error && response.statusCode == 200) {
                console.log(body)
            }
        }
    );
};