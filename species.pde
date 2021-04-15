Table species;
Poster poster;

PFont HelveticaNow;
PImage seta;

void setup() {
  species = loadTable("ARCHIVE.csv", "header");
  size(529,755);
  
  
  HelveticaNow = loadFont("HelveticaNowDisplay-Regular-48.vlw");
  seta = loadImage ("seta-02.png");
  
  println(species.getRowCount());

  int count = 1;



  // get table poster contents 
  for (TableRow posterData : species.rows()) {

    poster = new Poster(posterData);

    poster.designPoster();
    poster.savePoster(count);

    count = count+1;
  }
}
  
