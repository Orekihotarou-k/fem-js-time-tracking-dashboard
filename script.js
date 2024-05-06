// fetch and import data from json
const data = ("../data.json")

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
    console.log(timeData)
})