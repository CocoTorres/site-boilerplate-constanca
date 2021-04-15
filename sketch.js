const sources = [];
let source;
let imageCounter = 0;
const imageContainer = document.getElementById("images-container")


function setup () {
    noCanvas()
    background(40);

    for (let i = 0; i < imageNames.length; i++) {
        const name = imageNames[i];
        sources[i] = "images/frames/" + name;
    }
}
console.log("sources -> ", sources );

function draw() {
    
    // console.log("FrameCount -> ", frameCount%20 == 0 );
    if(frameCount%20 == 0){
        source = sources[imageCounter];
        imageCounter++;
    }
    
    // const s = map(noise(mouseX*0.001, mouseY*0.001), 0, 1, 100, 100);
    if (source) {
        const image = document.createElement("img");
        image.classList.add("image-follow")
        image.src = source;
        image.style.left = mouseX + "px";
        image.style.top = mouseY + "px";
        
        imageContainer.appendChild(image)
    }
    
    if(imageCounter >= sources.length){
        imageCounter = 0;
    }
}