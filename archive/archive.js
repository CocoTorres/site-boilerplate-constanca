const params = new URLSearchParams(window.location.search)



for (let i = 0; i < databaseArchive.length; i++) {
    const specie = databaseArchive[i];
    
    renderGrid(specie)
}



function renderGrid(specie) {
    const imageUrl = "../images/species/" + specie.NAME.toLowerCase() + ".jpeg"
    const htmlTemplate = `
        <tr class="grid grid-9 margin">
            <td class="type-monospaced monospaced-small">${specie.NUMBER}</td>
            <td class="type-monospaced monospaced-small">${specie.KINGDOM}</td>
            <td class="type-monospaced monospaced-small">${specie.PHYLUM}</td>
            <td class="type-monospaced monospaced-small">${specie.SUBPHYLUM}</td>
            <td class="type-monospaced monospaced-small">${specie.CLADE}</td>
            <td class="type-monospaced monospaced-small">${specie.SUBCLADE}</td>
            <td class="type-monospaced monospaced-small">${specie.ORDER}</td>
            <td class="type-monospaced monospaced-small">${specie.SUBORDER}</td>
            <td class="type-monospaced monospaced-small">${specie.FAMILY}</td>
        </tr>
        <img class="fullscreen-image" src="${imageUrl}"> 
    `;

    const table = document.getElementById("species-table")
    table.insertAdjacentHTML("beforeend", htmlTemplate);
}