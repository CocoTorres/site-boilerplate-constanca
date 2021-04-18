const params = new URLSearchParams(window.location.search)

for (let i = 0; i < databaseSpecies.length; i++) {
    const specie = databaseSpecies[i];

    // render GRID IMAGES (ELSE IF)
    if (params.has("family")) {
        const family = params.get("family")
        if (specie.FAMILY.toLowerCase() == family) {
            renderGrid(specie)
        }
    } else if (params.has("subclade")) {
        const subClade = params.get("subclade")
        if (specie.SUBCLADE.toLowerCase() == subClade) {
            renderGrid(specie)
        }
    } else if (params.has("clade")) {
        const clade = params.get("clade")
        if (specie.CLADE.toLowerCase() == clade) {
            renderGrid(specie)
        }
    } else if (params.has("suborder")) {
        const subOrder = params.get("suborder")
        if (specie.SUBORDER.toLowerCase() == subOrder) {
            renderGrid(specie)
        }
    } else if (params.has("order")) {
        const order = params.get("order")
        if (specie.ORDER.toLowerCase() == order) {
            renderGrid(specie)
        }
    } else if (params.has("subphylum")) {
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
        console.log("Kingdom URL -> ", kingdom, "== Database Kingdom -> ", specie.KINGDOM)
        if (specie.KINGDOM.toLowerCase() == kingdom) {
            renderGrid(specie)
        }
    } else {
        renderGrid(specie)
    }

    // List (IF)
    if (params.has("subclade")) {
        const subClade = params.get("subclade")
        const subCladeList = document.getElementById(subClade);
        if (subCladeList) { subCladeList.classList.add("open"); }
    } if (params.has("clade")) {
        const clade = params.get("clade")
        const cladeList = document.getElementById(clade);
        if (cladeList) { cladeList.classList.add("open"); }
    } if (params.has("suborder")) {
        const subOrder = params.get("suborder")
        const subOrderList = document.getElementById(subOrder);
        if (subOrderList) { subOrderList.classList.add("open"); }
    } if (params.has("order")) {
        const order = params.get("order")
        const orderList = document.getElementById(order);
        if (orderList) { orderList.classList.add("open"); }
    } if (params.has("subphylum")) {
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
    const htmlTemplate = `
        <div class="frame" id="${specie.NAME.toLowerCase()}">
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

    const container = document.getElementById("info-container")
    container.insertAdjacentHTML("beforeend", htmlTemplate);
}