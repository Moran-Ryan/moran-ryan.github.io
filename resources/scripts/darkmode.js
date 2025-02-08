// Check if darkOn exists in localStorage, and create it if it doesn't
if (!localStorage.getItem("darkOn")) {
    console.log("darkOn item not found in localStorage, creating");
    localStorage.setItem("darkOn", "false");
} else {
    console.log(`darkOn item found in localStorage. Its value is ${localStorage.getItem("darkOn")}`)
}

// Variable to acess state of the theme toggle checkbox
const darkToggle = document.getElementById("darkmode");
// Variable to access the stylesheet link for the theme
const theme = document.getElementById("theme");
// Variable to represent the state of darkOn in localStorage. Must be updated after changing

// Switches to light theme
const makeLight = () => {
    theme.setAttribute('href', "./resources/css/light.css");
}

// Switches to dark theme
const makeDark = () => {
    theme.setAttribute('href', "./resources/css/dark.css");
}

// Calls makeDark() or makeLight() functions based on value of darkOn in localStorage
const toggleColors = () => {
    if (localStorage.getItem("darkOn") === "true") {
        console.log("Tuning dark mode off");
        localStorage.setItem("darkOn", "false");
        makeLight();
        console.log(localStorage.getItem("darkOn"));
    } else if (localStorage.getItem("darkOn") === "false") {
        console.log("Tuning dark mode on");
        localStorage.setItem("darkOn", "true");
        makeDark();
        console.log(localStorage.getItem("darkOn"));
    } else {
        console.log("Something weird is going on");
    }
}

darkToggle.addEventListener("click", toggleColors);