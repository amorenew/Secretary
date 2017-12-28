import platform from 'platform'

export function isMobile() {
    if (platform.name === null) {
        return true
    } else {
        return false
    }
}