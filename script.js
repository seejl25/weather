// async function loadJson(url) {
    
//         try {
//             const response = await fetch(url)
//             const data = await response.json()
//             let location = data.address
//             let temp = data.currentConditions.temp
//             let conditions = data.currentConditions.conditions
//             let description = data.description
//             let humidity = data.currentConditions.humidity
//             let precip = data.currentConditions.precip
//             console.log(data)
//         } catch (error) {
//             console.error(error);
//         };

// }

// function getData() {
//     const locInput = document.querySelector("#location");
//     console.log(locInput.textContent)
//     const submitBtn = document.querySelector("button");
//     submitBtn.addEventListener("click", async () => {
//         try {
//             let weatherReport = await loadJson(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${locInput}?key=UKVFPJVGLY4RZBSZ65HEZVTYE`, {mode: 'cors'})
//             return weatherReport
//         } catch (error) {
//             console.error(error)
//         }
        
//     })
// }

const submitBtn = document.querySelector("button")
submitBtn.addEventListener("click", () => {
    console.log("HI")
})


// `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${input}?key=UKVFPJVGLY4RZBSZ65HEZVTYE`, {mode: 'cors'}