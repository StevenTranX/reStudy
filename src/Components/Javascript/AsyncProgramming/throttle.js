function log () {
    console.log('tada')
}

function throttle (callback, wait) {
    let isThrottling = false
    return function () {
        if(isThrottling) return;

        isThrottling = true;
        setTimeout(() => {

            callback()
            isThrottling = false
        },wait)
    }
}
const throttledLog = throttle(log, 500)

throttledLog()
throttledLog()
throttledLog()
throttledLog()

setTimeout(throttledLog, 500)
setTimeout(throttledLog, 600)
setTimeout(throttledLog, 700)
setTimeout(throttledLog, 700)
setTimeout(throttledLog, 700)
setTimeout(throttledLog, 700)
setTimeout(throttledLog, 700)
