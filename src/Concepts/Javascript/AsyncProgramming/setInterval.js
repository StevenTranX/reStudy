function countdown(secs = 1) {
    let currentSecond = secs;

    const interval = setInterval( () => {
        console.log(currentSecond)

        if (currentSecond <= 0) {
            clearInterval(interval)
        }
        
        currentSecond--
    }, 1000)
}

countdown(5)