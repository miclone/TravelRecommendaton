const search = document.querySelector("#search");
const search_results = document.querySelector("#search-results");
const noresultfound = document.querySelector("#noresultfound");
const search_text = document.querySelector("#search-text");
const arrows = document.querySelector("#arrows");
const search_button = document.querySelector("#search-button");

const result1 = document.querySelector("#result1");
const result1_pic = document.querySelector("#result1-pic");
const pic1_caption = document.querySelector("#pic1-caption");
const pic1_description = document.querySelector("#pic1-description");

const result2 = document.querySelector("#result2");
const result2_pic = document.querySelector("#result2-pic");
const pic2_caption = document.querySelector("#pic2-caption");
const pic2_description = document.querySelector("#pic2-description");

const result3 = document.querySelector("#result3");
const result3_pic = document.querySelector("#result3-pic");
const pic3_caption = document.querySelector("#pic3-caption");
const pic3_description = document.querySelector("#pic3-description");

const searchedDestinationsData = "searchedDestinations";
const searchedDestinationsIndexData = "searchedDestinationsIndex";

let countryDestinations = [];
let templesDestinations = [];
let planetsDestinations = [];
let searchedDestinations = [];
let searchText = "";
let indexes = new Array(0, 1, 2);

class destination {
    constructor(locationType, locationName, localName, imageUrl, description) {
        this.locationType = locationType;
        this.locationName = locationName;
        this.localName = localName;
        this.imageUrl = imageUrl;
        this.description = description;
    }
}

function addFilteredCountryDestinations() {
    Array.from(countryDestinations).forEach(country => {
        let locationType = "countries";
        let locationName = country["name"];
        let cities = country["cities"];
        Array.from(cities).forEach(city => {
            let localName = city["name"];
            let imageUrl = city["imageUrl"];
            let description = city["description"];
            if ((searchText == "all") ||
                ((locationType.toLowerCase().includes(searchText)) ||
                    (locationType.toLowerCase().includes(searchText)) ||
                    (locationName.toLowerCase().includes(searchText)) ||
                    (localName.toLowerCase().includes(searchText)) ||
                    (description.toLowerCase().includes(searchText)))) {
                let dest = new destination(locationType, locationName, localName, imageUrl, description);
                searchedDestinations.push(dest);
            }
        });
    });
}

function addFilteredTempleDestinations() {
    Array.from(templesDestinations).forEach(temple => {
        let locationType = "temples";
        let locationName = "temple";
        let localName = temple["name"];
        let imageUrl = temple["imageUrl"];
        let description = temple["description"];
        if ((searchText == "all") ||
            ((locationType.toLowerCase().includes(searchText)) ||
                (locationType.toLowerCase().includes(searchText)) ||
                (locationName.toLowerCase().includes(searchText)) ||
                (localName.toLowerCase().includes(searchText)) ||
                (description.toLowerCase().includes(searchText)))) {
            let dest = new destination(locationType, locationName, localName, imageUrl, description);
            searchedDestinations.push(dest);
        }
    });
}

function addFilteredPlanetDestinations() {
    Array.from(planetsDestinations).forEach(planet => {
        let locationType = "planets";
        let locationName = "planet";
        let localName = planet["name"];
        let imageUrl = planet["imageUrl"];
        let description = planet["description"];
        if ((searchText == "all") ||
            ((locationType.toLowerCase().includes(searchText)) ||
                (locationType.toLowerCase().includes(searchText)) ||
                (locationName.toLowerCase().includes(searchText)) ||
                (localName.toLowerCase().includes(searchText)) ||
                (description.toLowerCase().includes(searchText)))) {
            let dest = new destination(locationType, locationName, localName, imageUrl, description);
            searchedDestinations.push(dest);
        }
    });
}

function setImage1(destination) {
    result1_pic.src = "./images/" + destination.imageUrl;
    pic1_caption.textContent = destination.localName;
    pic1_description.textContent = destination.description;
}

function setImage2(destination) {
    result2_pic.src = "./images/" + destination.imageUrl;
    pic2_caption.textContent = destination.localName;
    pic2_description.textContent = destination.description;
}

function setImage3(destination) {
    result3_pic.src = "./images/" + destination.imageUrl;
    pic3_caption.textContent = destination.localName;
    pic3_description.textContent = destination.description;
}

function saveSearchedResultsSessionData() {
    let sessionJsonString = JSON.stringify(searchedDestinations);
    sessionStorage.setItem(searchedDestinationsData, sessionJsonString);
}

function loadSearchedResultsSessionData() {
    searchedDestinations.length = 0;
    let sessionData = sessionStorage.getItem(searchedDestinationsData);
    if (sessionData) {
        let data = JSON.parse(sessionData);
        Array.from(data).forEach(place => {
            let locationType = place["locationType"];
            let locationName = place["locationName"];
            let localName = place["localName"];
            let imageUrl = place["imageUrl"];
            let description = place["description"];
            let dest = new destination(locationType, locationName, localName, imageUrl, description);
            searchedDestinations.push(dest);
        });
    }
}

function saveDisplayIndexesSessionData() {
    sessionStorage.setItem(searchedDestinationsIndexData, indexes.toString());
}

function loadDisplayIndexesSessionData() {
    let sessionData = sessionStorage.getItem(searchedDestinationsIndexData);
    if (sessionData) {
        let sessionIndex = sessionData.split(",");
        indexes[0] = parseInt(sessionIndex[0]);
        indexes[1] = parseInt(sessionIndex[1]);
        indexes[2] = parseInt(sessionIndex[2]);
    }
}

function displaySearchedResults() {
    let i = 0;
    let c = 0;
    Array.from(searchedDestinations).forEach(destination => {
        if ((c < 3) && (i >= indexes[0]) && (i <= indexes[2]) && (i < searchedDestinations.length)) {
            switch (c) {
                case 0:
                    result1.style.display = "block";
                    setImage1(destination);
                    break;
                case 1:
                    result2.style.display = "block";
                    setImage2(destination);
                    break;
                case 2:
                    result3.style.display = "block";
                    setImage3(destination);
                    break;
            }
            c++;
        };
        i++;
    });
    search_results.style.display = "grid";
    if (searchedDestinations.length > 3) {
        arrows.style.display = "flex";
    }
}

function searchDesiredDestinations() {
    sessionStorage.clear();    
    search_results.style.display = "none";
    arrows.style.display = "none";
    noresultfound.style.display = "none";
    result1.style.display = "none";
    result1_pic.style.src = "";
    pic1_caption.textContent = "";
    pic1_description.textContent = "";
    result2.style.display = "none";
    result2_pic.style.src = "";
    pic2_caption.textContent = "";
    pic2_description.textContent = "";
    result3.style.display = "none";
    result3_pic.style.src = "";
    pic3_caption.textContent = "";
    pic3_description.textContent = "";
    indexes[0] = 0;
    indexes[1] = 1;
    indexes[2] = 2;
    searchedDestinations.length = 0;
    searchText = search_text.value.trim().toLowerCase();
    if (searchText != "") {
        addFilteredCountryDestinations();
        addFilteredTempleDestinations();
        addFilteredPlanetDestinations();
    }
    if (searchedDestinations.length > 0) {
        displaySearchedResults();
        saveSearchedResultsSessionData();
        saveDisplayIndexesSessionData();
    } else {
        noresultfound.style.display = "flex";
        sessionStorage.removeItem("searchedDestinations");
    }
}

search_text.addEventListener("keydown", (e) => {
    if (e.key == "Enter") {
        searchDesiredDestinations();
    }
});

search_button.addEventListener("click", (e) => {
    searchDesiredDestinations();
});

function changeIndexValue(index, newValue) {
    if (newValue >= searchedDestinations.length) {
        newValue -= searchedDestinations.length;
    }
    if (newValue < 0) {
        newValue += searchedDestinations.length;
    }
    indexes[index] = newValue;
}

function moveImages() {
    setImage1(searchedDestinations[indexes[0]]);
    setImage2(searchedDestinations[indexes[1]]);
    setImage3(searchedDestinations[indexes[2]]);
    saveDisplayIndexesSessionData();
}

function lefttArrowClicked() {
    changeIndexValue(0, indexes[0] - 1);
    changeIndexValue(1, indexes[1] - 1);
    changeIndexValue(2, indexes[2] - 1);
    moveImages();
}

function rightArrowClicked() {
    changeIndexValue(0, indexes[0] + 1);
    changeIndexValue(1, indexes[1] + 1);
    changeIndexValue(2, indexes[2] + 1);
    moveImages();
}

function loadApiJson() {
    var json = JSON.parse(this.responseText);
    Array.from(json.countries).forEach(destination => {
        countryDestinations.push(destination);
    });
    Array.from(json.temples).forEach(destination => {
        templesDestinations.push(destination);
    });
    Array.from(json.planets).forEach(destination => {
        planetsDestinations.push(destination);
    });
    loadSearchedResultsSessionData();
    loadDisplayIndexesSessionData();
    if (searchedDestinations.length > 0) {
        displaySearchedResults();
    }
}

var req = new XMLHttpRequest();
req.addEventListener("load", loadApiJson);
var url = './api.json';
req.open('GET', url, true);
req.responseType = 'text';
req.send();
