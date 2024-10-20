const search = document.querySelector("#search");
const search_results = document.querySelector("#search-results");
const noresultfound = document.querySelector("#noresultfound");
const search_text = document.querySelector("#search-text");
const arrows = document.querySelector("#arrows");
const dreamtravelcenter = document.querySelector("#dreamtravelcenter");

let countryDestinations = [];
let templesDestinations = [];
let planetsDestinations = [];
let searchedDestinations = [];

function searchTheseDestinations(destinations, destinationName) {

}

search_text.addEventListener("keydown", (e) => {
    if (e.key == "Enter") {
        dreamtravelcenter.style.display = "none";
        search_results.style.display = "none";
        arrows.style.display = "none";
        noresultfound.style.display = "none";
        searchedDestinations.length = 0;
        if (search_text.value != "") {
            if (search_text.value.toLowerCase() == "all") {
                searchedDestinations.push(countryDestinations);
                searchedDestinations.push(templesDestinations);
                searchedDestinations.push(planetsDestinations);
            } else {
                searchTheseDestinations(countryDestinations, "countries");
                searchTheseDestinations(templesDestinations, "temples");
                searchTheseDestinations(planetsDestinations, "planets");
            }
            if (searchedDestinations.length > 0) {

                search_results.style.display = "grid";
                if (searchedDestinations.length > 3) {
                    arrows.style.display = "flex";
                }
            }
            else {
                noresultfound.style.display = "flex";
            }
        }
        console.log(searchedDestinations.length);
        console.log(searchedDestinations);
    }
});

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
}

var req = new XMLHttpRequest();
req.addEventListener("load", loadApiJson);
var url = './api.json';
req.open('GET', url, true);
req.responseType = 'text';
req.send();
