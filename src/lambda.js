var username="{enter your username}";
var password="{enter your encoded password}";

var https = require('https');
var http = require('http');
var log = log;
var generateControlError = generateControlError;


/**
 * Main entry point.
 * Incoming events from Alexa Lighting APIs are processed via this method.
 */
exports.handler = function(event, context) {

    switch (event.header.namespace) {

        case 'Discovery':
            handleDiscovery(event, context);
            break;

        case 'Control':
            handleControl(event, context);
            break;

        case 'System':
            if(event.header.name=="HealthCheckRequest"){
                var headers = {
                    namespace: 'System',
                    name: 'HealthCheckResponse',
                    payloadVersion: '1'
                };
                var payloads = {
                    "isHealthy": true,
                    "description": "The system is currently healthy"
                };
                var result = {
                    header: headers,
                    payload: payloads
                };

                context.succeed(result);
            }
            break;

    /**
     * We received an unexpected message
     */
        default:
            // Warning! Logging this in production might be a security problem.
            log('Err', 'No supported namespace: ' + event.header.namespace);
            context.fail('Something went wrong');
            break;
    }
};

/**
 * Utility functions.
 */
function parseJson(jsonMessage,requestType){
    try {
        return JSON.parse(jsonMessage);
    } catch (ex)
    {log("Parsing Error","error parsing JSON message of type "+requestType+": "+jsonMessage);}
}

function log(title, msg) {
    console.log('*************** ' + title + ' *************');
    console.log(msg);
    console.log('*************** ' + title + ' End*************');
}

function generateControlError(name, code, description) {
    var headers = {
        namespace: 'Control',
        name: name,
        payloadVersion: '1'
    };

    var payload = {
        exception: {
            code: code,
            description: description
        }
    };

    var result = {
        header: headers,
        payload: payload
    };

    return result;
}