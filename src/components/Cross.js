import platform from './platform'

export function isMobile() {
    if (platform&&platform.name) {
        console.log("sdfsdsd")
        console.log(platform.name)
        return true
    } else {
        console.log("sss")
        console.log("wrqqq")
        return null
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