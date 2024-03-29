console.log("mONster");

const API_KEY = '0191654637778d45596910c61109f1f6';

async function showWeather() {
    let city = 'goa';

    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`); 
    
    const data = await response.json();
    console.log('Weather data : ', data);

    let newPara = document.createElement('p');
    newPara.textContent = `${data?.main?.temp.toFixed(2)} °C`;
    document.body.appendChild(newPara);
}

function getLocation() {
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    else {
        console.log("No geoLocation Support");
    }
}

function showPosition(position) {
    let lat = position.coords.latitude;
    let longi = position.coords.longitude;

    console.log(lat);
    console.log(longi);
}

// optional chaning operator

// let user = { name: "Aslice", address: { city: "Mumbai", state: "Maharashtra", pin: "400001" } };

// let user = null;

let user = { name: "Aslice", address: { city: "Mumbai", state: "Maharashtra"} };

let zipcode = user?.address?.pin;

console.log(zipcode);


function renderWeatherInfo(data) {
    let newPara = document.createElement('p');
    newPara.textContent = `${data?.main?.temp.toFixed(2)} °C`

    document.body.appendChild(newPara);
}

async function fetchWeatherDetails() {

try {
    let city = "goa";

    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    const data = await response.json();

    console.log("Weather data:-> " , data);

    renderWeatherInfo(data);
}
catch(err) {
    //handle the error here
}
//https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric

}

async function getCustomWeatherDetails() {
try{
    let latitude = 17.6333;
    let longitude = 18.3333;

    let result = await fetch(`https://api.openweathermap.org/data/2.5/weather?
                            lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`);

    let data = await result.json();

    console.log(data);
}
catch(err) {
    console.log("Errror Found" , err);
}

}


function switchTab(clickedTab) {

apiErrorContainer.classList.remove("active");

if (clickedTab !== currentTab) {
currentTab.classList.remove("current-tab");
currentTab = clickedTab;
currentTab.classList.add("current-tab");

if (!searchForm.classList.contains("active")) {
  userInfoContainer.classList.remove("active");
  grantAccessContainer.classList.remove("active");
  searchForm.classList.add("active");
} 
else {
  searchForm.classList.remove("active");
  userInfoContainer.classList.remove("active");
  //getFromSessionStorage();
}

// console.log("Current Tab", currentTab);
}
}
