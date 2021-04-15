let randomNumber;

let NUMBER;
let NAME;
let KINGDOM;
let PHYLUM;
let SUBPHYLUM;
let CLADE;
let SUBCLADE;
let ORDER;
let SUBORDER;
let FAMILY;
let LEVEL;
let LEGENDA;

let IMAGE_URL; 

let seta;
let HelveticaNow;

const margin = 15;

function setup() {
    randomNumber = Math.floor(random(databaseProcessing.length))
    
    createCanvas(529,755);
    // HelveticaNow = loadFont("HelveticaNowDisplay-Regular-48.vlw");
    // seta = loadImage("seta-02.png");
    
    specie = databaseProcessing[randomNumber];
    console.log("specie -> ", specie)

    NUMBER = specie.NUMBER;
    NAME = specie.NAME;
    KINGDOM = specie.KINGDOM;
    PHYLUM = specie.PHYLUM;
    SUBPHYLUM = specie.SUBPHYLUM;
    CLADE = specie.CLADE;
    SUBCLADE = specie.SUBCLADE;
    ORDER = specie.ORDER;
    SUBORDER = specie.SUBORDER;
    FAMILY = specie.FAMILY;
    LEVEL = specie.LEVEL;
    LEGENDA = specie.LEGENDA;
    IMAGE_URL = "images/species/" + specie.NAME.toLowerCase() + ".jpg"; 

    designPoster()
}

function designPoster() {
    //Design Text
    background (0);
    // image (seta, 0,0);
    // textFont(HelveticaNow);
    fill(255);
    
    // NAME DESIGN
    textAlign(LEFT,TOP);
    textSize(38);
    text(NAME, margin, 45, width - margin*2, height - margin*2);
    
    // Nº DESIGN
    textSize(43);
    textAlign(LEFT, TOP);
    text("N " + NUMBER, margin, 85, width - margin, height - margin*3);
    // RECT
    noFill();
    stroke(255);
    

    const image = document.createElement("img");
    image.src = IMAGE_URL;
    image.style.position = "absolute";
    image.style.left = 270 + "px";
    image.style.top = 56 + "px";
    image.style.width = 222 + "px";
    image.style.height = 366 + "px";
    image.style.zIndex = 10;
    
    const imageContainer = document.getElementById("image-container")
    imageContainer.appendChild(image)
    
    // 270,56,222,366);
    
    rectMode(CORNER);
    rect(270,56,222,366);
    
    // LEVEL DESIGN
    textSize(12);
    if (LEVEL == "PHYLUM") {
      fill(19,255,15);
    };
    if (LEVEL == "SUBPHYLUM") {
      fill(146,196,165);
    };
    if (LEVEL == "CLADE") {
      fill(0,245,244);
    };
    if (LEVEL == "SUBCLADE") {
      fill(231,145,254);
    };
    if (LEVEL == "ORDER") {
      fill(245,252,198);
    };
    if (LEVEL == "SUBORDER") {
      fill(195,244,251);
    };
    if (LEVEL == "FAMILY") {
      fill(197,245,1);
    };
    textAlign(RIGHT,TOP);
    text(LEVEL, 251, 440);
    
    // TEXT DESIGN
    fill(255);
    textAlign(LEFT,TOP);
    rectMode(CORNERS);
    text(LEGENDA,270,439,492,605);
    // FIXED TEXT
    fill(255);
    textSize(19);
    textAlign(LEFT, TOP);
    text("PHYLUM", 22, 596);
    text("SUBPHYLUM", 22, 616);
    text("CLADE", 22, 636);
    text("SUBCLADE", 22, 656);
    text("ORDER", 22, 676);
    text("SUBORDER", 22, 696);
    text("FAMILY", 22, 716);
    
    // 
    fill(255);
    textSize(19);
    textAlign(LEFT, TOP);
    text(PHYLUM, 269, 596);
    text(SUBPHYLUM, 269, 616);
    text(CLADE, 269, 636);
    text(SUBCLADE, 269, 656);
    text(ORDER, 269, 676);
    text(SUBORDER, 269, 696);
    text(FAMILY, 269, 716);
}