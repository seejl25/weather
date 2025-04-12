import sunnyDay from "../assets/sunny.PNG"
import cloudyDay from "../assets/cloudy.PNG"
import rainyDay from "../assets/rainy.PNG"

function displayInfo(location, temperature , conditions, description, humidity, precipitation) {
    // Clear form content
    document.body.innerHTML = "";

    // Create div container to store all information
    const container = document.createElement("div");
    container.classList.add("container")

    // Create background image
    const backgroundImg = document.createElement("img")
    backgroundImg.classList.add("background")
    if (conditions.includes("clear")) {
        backgroundImg.src = sunnyDay;
    } else if (conditions.includes("cloudy")) {
        backgroundImg.src = cloudyDay;
    } else if (conditions.includes("rain")) {
        backgroundImg.src = rainyDay;
    }

    // Create a div for location, temp and condition
    const main = document.createElement("div");
    main.classList.add("main");
    const loc = document.createElement("h1");   // Location as header
    loc.classList.add("loc")
    loc.textContent = location;
    const temp = document.createElement("h1");
    temp.classList.add("temp")
    const tempInDegree = (temperature-32)*(5/9);    // Convert fahreinheit to degree celsius
    const oneDP = Math.round(tempInDegree*10)/10;   // Rounding temperature to 1dp
    temp.textContent = `${oneDP}°C`;
    const condition = document.createElement("p");
    condition.classList.add("condition")
    condition.textContent = conditions;     // Current weather condition
    main.appendChild(loc);
    main.appendChild(temp);
    main.appendChild(condition);

    // Create a div for description
    const desc = document.createElement("div");
    desc.classList.add("desc");
    desc.textContent = description;

    // Create a div for humidity and precipitation
    const secondary = document.createElement("div");
    secondary.classList.add("secondary");
    const lineBreak = document.createElement("br"); // used to create line break
    const humid = document.createElement("div");
    humid.classList.add ("humid")
    humid.textContent = `Humidity: ${humidity}%`;   // Humidity
    const precip = document.createElement("div");
    precip.classList.add("precip")
    precip.textContent = `Precipitation: ${precipitation} mm`;  // Precipitation
    secondary.appendChild(humid);
    secondary.appendChild(precip);

    // Append all info into div container
    container.appendChild(backgroundImg);
    container.appendChild(main);
    container.appendChild(desc);
    container.appendChild(secondary);
    document.body.appendChild(container);
}

export {displayInfo}