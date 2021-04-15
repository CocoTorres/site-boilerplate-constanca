class Poster {
  
  int NUMBER;
  String NAME;
  String KINGDOM;
  String PHYLUM;
  String SUBPHYLUM;
  String CLADE;
  String SUBCLADE;
  String ORDER;
  String SUBORDER;
  String FAMILY;
  String LEVEL;
  String LEGENDA;
  String IMAGE_URL;
  PImage IMAGE_FILE;


  Poster(TableRow poster) {
    NUMBER = poster.getInt("NUMBER");
    NAME = poster.getString("NAME");
    KINGDOM = poster.getString ("KINGDOM");
    PHYLUM = poster.getString ("PHYLUM");
    SUBPHYLUM = poster.getString ("SUBPHYLUM");
    CLADE = poster.getString ("CLADE");
    SUBCLADE = poster.getString ("SUBCLADE");
    ORDER = poster.getString ("ORDER");
    SUBORDER = poster.getString ("SUBORDER");
    FAMILY = poster.getString ("FAMILY");
    LEVEL = poster.getString ("LEVEL");
    LEGENDA = poster.getString ("LEGENDA");
    IMAGE_URL = "images/" + poster.getString("NAME") + ".jpg"; 
  }

  int margin = 15;

  void designPoster() {
    IMAGE_FILE = loadImage(IMAGE_URL);
    
    //Design Text
    background (0);
    image (seta, 0,0);
    textFont(HelveticaNow);
    fill(255);
    
    // NAME DESIGN
    textAlign(LEFT,TOP);
    textSize(38);
    text(NAME, margin, 45, width - margin*2, height - margin*2);
    
    // Nº DESIGN
    textSize(43);
    textAlign(LEFT, TOP);
    text("Nº " + NUMBER, margin, 85, width - margin, height - margin*3);
    // RECT
    noFill();
    stroke(255);
    image (IMAGE_FILE,270,56,222,366);
    rectMode(CORNER);
    rect(270,56,222,366);
    
    // LEVEL DESIGN
    textSize(12);
    if (LEVEL.equals ("PHYLUM")) {
      fill(19,255,15);
    };
    if (LEVEL.equals ("SUBPHYLUM")) {
      fill(146,196,165);
    };
    if (LEVEL.equals ("CLADE")) {
      fill(0,245,244);
    };
    if (LEVEL.equals ("SUBCLADE")) {
      fill(231,145,254);
    };
    if (LEVEL.equals ("ORDER")) {
      fill(245,252,198);
    };
    if (LEVEL.equals ("SUBORDER")) {
      fill(195,244,251);
    };
    if (LEVEL.equals ("FAMILY")) {
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
    void savePoster(int index) {
      save("export/poster-6-" + index + ".png");
    }
}
  
