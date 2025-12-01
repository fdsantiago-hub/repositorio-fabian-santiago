onEvent("button1", "click", function( ) {
  timedLoop(10, function() {
    setProperty("screen1", "background-color", rgb(randomNumber(0, 255), randomNumber(0, 255), randomNumber(0, 255), 0.5));
  });
});
onEvent("music", "click", function( ) {
  playSound("assets/AltaFarra.mp3", false);
});
onEvent("text_input1", "input", function( ) {
  setProperty("screen1", "image", "https://cdn.pixabay.com/photo/2022/09/02/07/26/rick-sanchez-7426878_1280.jpg");
});
