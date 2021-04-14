const params = new URLSearchParams(window.location.search)

for (let i = 0; i < databaseSpecies.length; i++) {
    const specie = databaseSpecies[i];

    // render GRID IMAGES (ELSE IF)
    if (params.has("subphylum")) {
        const subPhylum = params.get("subphylum")
        if(specie.SUBPHYLUM.toLowerCase() == subPhylum) {
            renderGrid(specie)
        }
    } else if (params.has("phylum")) {
        const phylum = params.get("phylum")
        if(specie.PHYLUM.toLowerCase() == phylum) {
            renderGrid(specie)
        }
    } else if (params.has("kingdom")) {
        const kingdom = params.get("kingdom")
        console.log("Kingdom URL -> ", kingdom, "== Database Kingdom -> ", specie.KINGDOM)
        if(specie.KINGDOM.toLowerCase() == kingdom) {
            renderGrid(specie)
        }
    } else {
        renderGrid(specie)
    }

    // List (IF)
    if (params.has("subphylum")) {
        const subPhylum = params.get("subphylum")
        const subPhylumList = document.getElementById(subPhylum);
        if (subPhylumList) { subPhylumList.classList.add("open"); }
    } if (params.has("phylum")) {
        const phylum = params.get("phylum")
        const phylumList = document.getElementById(phylum);
        if (phylumList) { phylumList.classList.add("open"); }
    } if (params.has("kingdom")) {
        const kingdom = params.get("kingdom")
        const kingdomList = document.getElementById(kingdom);
        if (kingdomList) { kingdomList.classList.add("open"); }
    }
}

function renderGrid(specie) {
    const imageUrl = "../images/species/" + specie.NAME.toLowerCase() + ".jpeg"
    const linkUrl = "../species/species.html#" + specie.NAME.toLowerCase();
    const htmlTemplate = `
        <a href="${linkUrl}">
            <img class="species-img" src="${imageUrl}" alt="">
            <h2 class="type-monospaced monospaced-small"><strong>${specie.NUMBER}</strong>${specie.NAME}</h2>
        </a>
    `;

    const gallery = document.getElementById("image-grid")
    gallery.insertAdjacentHTML("beforeend", htmlTemplate);
}