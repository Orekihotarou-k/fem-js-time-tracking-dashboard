// fetch and import data from json 
const dataUrl = "../data.json"

async function fetchData() {
    try {
        const response = await fetch(dataUrl)
        const timeData = await response.json()
        return timeData
    } catch {
        // if there is an error, display an error message
        console.log("Error fetching data")
        return[]
    }
}

// reusable function to display data
function updateWorkHours(timeData, currentWorkHourChoice, previousWorkHourChoice, timeframe) {
    const currentWorkHours = document.querySelectorAll(currentWorkHourChoice)  
    const previousWorkHours = document.querySelectorAll(previousWorkHourChoice)  

    timeData.forEach((e, i) => {
        currentWorkHours[i].innerHTML = `${e.timeframes[timeframe].current}hrs`
        previousWorkHours[i].innerHTML = `${e.timeframes[timeframe].current}hrs`
    })
}

// get button elements 
const dailyToggle = document.querySelector(".dailyToggle")
const weeklyToggle = document.querySelector(".weeklyToggle")
const monthlyToggle = document.querySelector(".monthlyToggle")

async function handleToggleClick(timeframe) {
    const timeData = await fetchData()
    updateWorkHours(timeData, ".time", ".previous", timeframe)
}

dailyToggle.addEventListener("click", () => handleToggleClick("daily"))
weeklyToggle.addEventListener("click", () => handleToggleClick("weekly"))
monthlyToggle.addEventListener("click", () => handleToggleClick("monthly"))
