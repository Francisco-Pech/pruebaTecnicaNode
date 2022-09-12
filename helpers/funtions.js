/**
 * Get array by key
 */
exports.pluck = (array, key) => {
    return array.map(value => value[key]);
}
