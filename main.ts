// Get seconds passed today
function getSecondsToday(): number {
    const date = new Date()

    const seconds = date.getSeconds()
    const minutes = date.getMinutes() * 60
    const hours = date.getHours() * 3600

    return hours + minutes + seconds
}
// Set Animation Delay for clock hands
function setTime(left: number, hand: string): void {
    let element = document.querySelector(`.clock__${hand}`) as HTMLElement
    let delay = left * -1
    element.style.animationDelay = `${delay}s`
}
// Create Clock Indicators
function createIndicators (): void {
    const totalIndicators = 30
    const container = document.querySelector('.clock__indicators') as HTMLElement
    for (let i = 0; i < totalIndicators ; i++) {
        const indicator = document.createElement('section') as HTMLElement
        indicator.className = 'clock__indicator'
        container.append(indicator)
    }
}

const currentSec = getSecondsToday()
// Convert to values (seconds, minutes, hours)
const seconds = (currentSec / 60) % 1
const minutes = (currentSec / 3600) % 1
const hours = (currentSec / 43200) % 1
// Set Clock Curent Time
setTime(60 * seconds, "second")
setTime(3600 * minutes, "minute")
setTime(43200 * hours, "hour")
// Crete Clock Indicator`s
createIndicators()
