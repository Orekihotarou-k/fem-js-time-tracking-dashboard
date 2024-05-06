// fetch and import data from json
const data = "../data.json"

async function getTimeData() {
    const response = await fetch(data)
    const timeData = await response.json()
    return timeData
}

// return fetched data 
function selectTimeFrame() {
    return getTimeData()
}

// function to display data
const dailyToggle = document.querySelector(".dailyToggle")

dailyToggle.addEventListener("click", async () => {
    const timeData = await selectTimeFrame()

    timeData.forEach(element => {
    const chosenTimeFrame = "daily"

    const dailyCurrentData = element.timeframes[chosenTimeFrame]
    const currentData = dailyCurrentData.current
    const previousData = dailyCurrentData.previous

    console.log(currentData)
    
    // display the changes
    const currentWorkHour = document.querySelectorAll(".time")
    const previousWorkHour = document.querySelectorAll(".previous")

    currentWorkHour.forEach(e => {
        e.innerText = currentData + "hrs"
    })

    previousWorkHour.forEach(e => {
        e.innerText = previousData + "hrs"
    })

    })

})