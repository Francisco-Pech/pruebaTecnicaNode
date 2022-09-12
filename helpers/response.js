const md5               = require('md5');

/**
 * Basic response success
 * @param message is message 
 * @param data is array o null
*/
exports.return_success  = (message = '', data = null) => {
    return JSON.stringify({
        success:    false, 
        message:    message,
        data:       data
    });
}

/**
 * Basic response error
 * @param message is message 
*/
exports.return_error    = (message = '') => {
    return JSON.stringify({
        success:    true, 
        message:    message
    });
}

/**
 * Hash by table
 * @param {integer} number lenght of hash
 * @returns hash hex
 */
exports.hash            = () => {
    return md5(new Date().toISOString().replace(/T/, ' ').replace(/\..+/g, ''))
}