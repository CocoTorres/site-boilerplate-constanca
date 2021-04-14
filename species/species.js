const params = new URLSearchParams(window.location.search)

for (let i = 0; i < databaseSpecies.length; i++) {
    const specie = databaseSpecies[i];

    // render GRID IMAGES (IF)
    if (params.has("subphylum")) {
        const subPhylum = params.get("subphylum")
        if (specie.SUBPHYLUM.toLowerCase() == subPhylum) {
            renderGrid(specie)
        }
    } else if (params.has("phylum")) {
        const phylum = params.get("phylum")
        if (specie.PHYLUM.toLowerCase() == phylum) {
            renderGrid(specie)
        }
    } else if (params.has("kingdom")) {
        const kingdom = params.get("kingdom")
        if (specie.KINGDOM.toLowerCase() == kingdom) {
            renderGrid(specie)
        }
    } else {
        renderGrid(specie)
    }

    // List (ELSE IF)
    if (params.has("subphylum")) {
        const subPhylum = params.get("subphylum")
        const subPhylumList = document.getElementById(subPhylum);
        subPhylumList.classList.add("open");
    } if (params.has("phylum")) {
        const phylum = params.get("phylum")
        const phylumList = document.getElementById(phylum);
        phylumList.classList.add("open");
    } if (params.has("kingdom")) {
        const kingdom = params.get("kingdom")
        const kingdomList = document.getElementById(kingdom);
        kingdomList.classList.add("open");
    }
}

function renderGrid(specie) {
    const imageUrl = "../images/species/" + specie.NAME.toLowerCase() + ".jpeg"
    const htmlTemplate = `
        <div class="frame">
            <img class="species-img" src="${imageUrl}" alt="">
        </div>
        <div class="flex grid-row">
            <div class="numbers type-monospaced monospaced-medium">
                <strong>${specie.NUMBER}</strong>
            </div>
            <div>
                <h1 class="type-monospaced monospaced-big">${specie.NAME}</h1>
                <h2 class="type-monospaced monospaced-medium">${specie.PHYLUM}</h2>
                <h3 class="type-helvetica">${specie.TEXT}</h3>
            </div>
        </div>
    `;

    const gallery = document.getElementById("image-grid")
    gallery.insertAdjacentHTML("beforeend", htmlTemplate);
}