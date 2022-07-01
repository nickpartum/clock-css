interface IClock {
    rootElementId: null | string,
    rootElement: null | HTMLElement,
    init: (elementId: string) => void | number,
    renderBaseElements: () => void,
    renderIndicators: () => void,
    getSecondsToday: () => number,
    setTime: (left: number, hand: string) => void,
    setCurrentClockTime: () => void
}

const clock: IClock = {
    rootElementId: null,
    rootElement: null,

    init: function (elementId) {
        this.rootElementId = elementId
        this.rootElement = document.querySelector(`#${this.rootElementId}`)

        if (this.rootElement === null) {
            console.error(`Element with ID "${this.rootElementId}" not found!`)
            return -1
        }

        if (this.rootElement.children.length > 0) {
            console.warn('Root element clean!')
            this.rootElement.innerHTML = ''
        }

        this.rootElement.className = `clock`

        this.renderBaseElements()

        this.setClockTime()

        return 0;
    },
    renderBaseElements: function () {
        const baseElements = ['second', 'minute', 'hour', 'center', 'indicators'];

        for (const baseElement of baseElements) {
            const element = document.createElement('div') as HTMLElement

            element.className = `clock__${baseElement}`
            this.rootElement.append(element)
        }

        this.renderIndicators()
    },
    renderIndicators: function () {
        const totalIndicators = 30
        const container = document.querySelector(`#${this.rootElementId} .clock__indicators`) as HTMLElement

        for (let i = 0; i < totalIndicators; i++) {
            const indicator = document.createElement('section') as HTMLElement

            indicator.className = 'clock__indicator'
            container.append(indicator)
        }
    },
    getSecondsToday: function () {
        const date = new Date()

        const seconds = date.getSeconds()
        const minutes = date.getMinutes() * 60
        const hours = date.getHours() * 3600

        return hours + minutes + seconds
    },
    setCurrentClockTime: function () {
        const currentSec = this.getSecondsToday()
        // Convert to values (seconds, minutes, hours)
        const seconds = (currentSec / 60) % 1
        const minutes = (currentSec / 3600) % 1
        const hours = (currentSec / 43200) % 1
        // Set Clock Current Time
        this.setTime(60 * seconds, "second")
        this.setTime(3600 * minutes, "minute")
        this.setTime(43200 * hours, "hour")
    },
    setTime: function (left, hand) {
        let element = document.querySelector(`#${this.rootElementId} .clock__${hand}`) as HTMLElement
        let delay = left * -1

        element.style.animationDelay = `${delay}s`
    }
}

// Start Clock
clock.init('myClock')