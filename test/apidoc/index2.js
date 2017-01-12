
/**
 * [setUserCache testss]
 * @param {[type]} key   [11111]
 * @param {[type]} value [222222]
 */
const setUserCache = function (key, value) {
    var userCode = this.getEnvironment().usercode;
    if (!userCode)return;
    localStorage.setItem(userCode + key, value);
}
