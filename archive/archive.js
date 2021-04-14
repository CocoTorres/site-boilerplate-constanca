const params = new URLSearchParams(window.location.search)

function renderGrid(archive) {
    const htmlTemplate = `
        <div class="flex">
            <div class="module-num2">
                <h2 class="type-monospaced monospaced-small">${archive.NUMBER}</h2>
            </div>
            <div class="grid grid-8 module2">
                <h2 class="type-monospaced monospaced-small">${archive.KINGDOM}</h2>
                <h2 class="type-monospaced monospaced-small">${archive.PHYLUM}</h2>
                <h2 class="type-monospaced monospaced-small">${archive.SUBPHYLUM}</h2>
                <h2 class="type-monospaced monospaced-small">${archive.CLADE}</h2>
                <h2 class="type-monospaced monospaced-small">${archive.SUBCLADE}</h2>
                <h2 class="type-monospaced monospaced-small">${archive.ORDER}</h2>
                <h2 class="type-monospaced monospaced-small">${archive.SUBORDER}</h2>
                <h2 class="type-monospaced monospaced-small">${archive.FAMILY}</h2>
            </div>
        </div>
    `;

    const gallery = document.getElementById("image-grid")
    gallery.insertAdjacentHTML("beforeend", htmlTemplate);
}