// get the buttons
const dailyToggle = document.querySelector(".dailyToggle")
const weeklyToggle = document.querySelector(".weeklyToggle")
const monthlyToggle = document.querySelector(".dmonthlyToggle")

// get the dynamic elements
const currentTime = document.querySelector(".time")
const previousTime =  document.querySelector(".previous")

// import data from JSON
const data = ("../data.json")

async function getTimeData() {
    const response = await fetch(data)
    const timeData = await response.json()
    console.log(timeData)
}

getTimeData()