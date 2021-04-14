const params = new URLSearchParams(window.location.search)

function renderGrid(specie) {
    const htmlTemplate = `
        <div class="flex">
            <div class="module-num2">
                <h2 class="type-monospaced monospaced-small">${specie.NUMBER}</h2>
            </div>
            <div class="grid grid-8 module2">
                <h2 class="type-monospaced monospaced-small">${specie.KINGDOM}</h2>
                <h2 class="type-monospaced monospaced-small">${specie.PHYLUM}</h2>
                <h2 class="type-monospaced monospaced-small">${specie.SUBPHYLUM}</h2>
                <h2 class="type-monospaced monospaced-small">${specie.CLADE}</h2>
                <h2 class="type-monospaced monospaced-small">${specie.SUBCLADE}</h2>
                <h2 class="type-monospaced monospaced-small">${specie.ORDER}</h2>
                <h2 class="type-monospaced monospaced-small">${specie.SUBORDER}</h2>
                <h2 class="type-monospaced monospaced-small">${specie.FAMILY}</h2>
            </div>
        </div>
    `;

    const gallery = document.getElementById("image-grid")
    gallery.insertAdjacentHTML("beforeend", htmlTemplate);
}