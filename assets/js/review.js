var btn1 = document.getElementsByClassName("btn1");
const slide = document.getElementById("slide");

btn1[0].onclick = function() {
  slide.style.transform = "translateX(0px)";
  for(i=0 ; i<4;i++){
    btn1[i].classList.remove("active");
  }
  this.classList.add("active");
}
btn1[1].onclick = function() {
  slide.style.transform = "translateX(-800px)";
  for(i=0 ; i<4;i++){
    btn1[i].classList.remove("active");
  }
  this.classList.add("active");
}
btn1[2].onclick = function() {
  slide.style.transform = "translateX(-1600px)";
  for(i=0 ; i<4;i++){
    btn1[i].classList.remove("active");
  }
  this.classList.add("active");
}
btn1[3].onclick = function() {
  slide.style.transform = "translateX(-2400px)";
  for(i=0 ; i<4;i++){
    btn1[i].classList.remove("active");
  }
  this.classList.add("active");
}