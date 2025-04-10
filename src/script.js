import "./styles.css"
import { displayInfo } from "./displayData"
async function loadJson() {
        try {
            const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${locInput.value}?key=UKVFPJVGLY4RZBSZ65HEZVTYE`, {mode: 'cors'});
            const data = await response.json();
            let location = data.address;
            location = location.charAt(0).toUpperCase() + location.slice(1);
            let temp = data.currentConditions.temp;
            let conditions = data.currentConditions.conditions;
            let description = data.description;
            let humidity = data.currentConditions.humidity;
            let precip = data.currentConditions.precip;
            if (precip === null) {
                precip = 0;
            }
            const information = await displayInfo(location, temp, conditions, description, humidity, precip);
            return information;
        } catch (error) {
            console.error(error);
        };
}

const locInput = document.querySelector("#location")
const submitBtn = document.querySelector("button")
submitBtn.addEventListener("click", () => {
    loadJson()
})


