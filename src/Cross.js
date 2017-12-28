import platform from 'platform'

export function isMobile() {
    if (platform.name) {
        console.log("sdfsdsd")
        console.log(platform.name)
        return false
    } else {
        console.log("sss")
        console.log("wrqqq")
        return true
    }
}
export function isReactNative() {
    try {
        console.log("asfdasfdsd")
        var m = require('react-native');
        return true
    } catch (ex) {
        console.log("aaaaa")
        return false
    }
}