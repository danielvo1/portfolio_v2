const instance = new TypeIt("#animated_intro", {
    strings: "Hello! My Name is Daniel. ",
    speed: 50,
    loop: false,
    afterComplete: function () {
        $(document).keyup(function(event) {
            if (event.which === 13) {
                window.location = "main.html";
            }
        });
      },
  })
  .delete(26)
  .type("I am an aspiring Software Engineer. " , { delay: 500})
  .delete(36)
  .type("An avid basketball fan. " , { delay: 500})
  .delete(24)
  .type( "Press Enter to Learn More. ") 
  .go();
  




  