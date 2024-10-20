const search = document.querySelector("#search");
const search_results = document.querySelector("#search-results");
const noresultfound = document.querySelector("#noresultfound");
const search_text = document.querySelector("#search-text");
const arrows = document.querySelector("#arrows");

search_text.addEventListener("keydown", (e) => {
    if (e.key == "Enter") {
        search_results.style.display = "none";
        arrows.style.display = "none";
        if (search_text.value == "all") {
            search_results.style.display = "grid";
            arrows.style.display = "flex";
        }
    }
});

