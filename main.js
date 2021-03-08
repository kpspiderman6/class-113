function preload()
 {

  }
  function setup(){ 
   canvas = createCanvas(1000, 600);
     canvas.position(110, 250); 
     video = createCapture(VIDEO); video.hide();
      tint_color = "";
     } 
     function draw() { 
          rect(30, 20, 700, 500, 50);
          circle(50, 50, 70);
          circle(50, 500, 70);
          circle(700, 50, 70);
          circle(700, 500, 70);
          fill(350,0,0);
          stroke(0,0,600);
          strokeWeight(10); // Beastly
         image(video, 120, 60, 500, 400); 
         tint(tint_color); }
         
    function take_snapshot(){
         save('photo.png');
         } 
         
         function filter() {
              tint_color = document.getElementById("input1").value; }