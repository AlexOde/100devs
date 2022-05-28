// create a stopwatch which is controlled through the console with sw.stop(), sw.start() and sw.reset(); the user must also be able to view the current time with sw.duration

// function Timer() {
//     let sumTime = 0;
    
//     this.start = () => {
//         if (!running) {

//        
//         }
//     }

//     this.stop = () => {
        
//     }

//     this.reset = () => {
//         sumTime = 0
//     }

//     this.duration = sumTime
// }

// let sw = new Timer()

// sw.start()

function Stopwatch() {
    let startTime, endTime, running, duration = 0;
    
    this.start = () => {
        if (running){
            throw new Error('Stopwatch has already started')
        }
        running = true

        startTime = new Date()
    }

    this.stop = () => {
        if (!running) {
            throw new Error('Stopwatch is now started')
        }
        running = false
        endTime = new Date()

        const seconds = (endTime.getTime() - startTime.getTime()) / 1000
        duration += seconds
    }

    this.reset = () => {
        startTime = null
        endTime = null
        running = false
        duration = 0
    }

    Object.defineProperty(this, 'duration', {
        get: function() {return duration;}
    })
}

let sw = new Stopwatch()