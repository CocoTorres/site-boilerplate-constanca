const params = new URLSearchParams(window.location.search)

for (let i = 0; i < databaseMaps.length; i++) {
    const maps = databaseMaps[i];

    // List (ELSE IF)
    if (params.has("phylum")) {
        const phylum = params.get("phylum")
        const phylumList = document.getElementById(phylum);
        phylumList.classList.add("open");
    } if (params.has("kingdom")) {
        const kingdom = params.get("kingdom")
        const kingdomList = document.getElementById(kingdom);
        kingdomList.classList.add("open");
    }
}

for (let i = 0; i < databaseMaps.length; i++) {
    const maps = databaseMaps[i];

    renderGrid(maps)
}



function renderGrid(maps) {
    const imageUrl = "../images/maps/" + maps.map.toUpperCase() + ".jpeg"
    const htmlTemplate = `
    <div class="flex grid-row">
        <div class="numbers type-monospaced-regular monospaced-medium">
            <h1>${maps.phylum}</h1>
        </div>
        <div>
            <h1 class="type-helvetica">${maps.text}</h1>
        </div>
    </div>
    <h2 class="type-helvetica grid-row map">Geographical distribution: ${maps.map.toUpperCase()}</h2>
    <div class="grid-row map id="${maps.map.toUpperCase()}"">
        <img class="maps-img" src="${imageUrl}" alt=""">
    </div>
    `;

    const container = document.getElementById("info-maps")
    container.insertAdjacentHTML("beforeend", htmlTemplate);
}
