$(document).ready(function() {

  /* Variable bandera */
  var flag = false;
  /* variable scroll */
  var scroll;

  $(window).scroll(function() {
    scroll = $(window).scrollTop();

    if(scroll > 150) {
      // Si el scroll es major a 200.....
      if(!flag) {
        // Si la variable flag es false o no existe......
        $("#logo").css({
          // Seleccionamos el elemento con el id logo
          "margin-top": "-5px",
          "width" : "150px",
          "height" : "150px"
        });


        $("#menuDesk > nav > ul > li > a").css({
          //Llamamos a el elemento a
          "color":"white"
        });

        $("#menuDesk").css({
          //Llamamos al elemento menudesk
          "background-color" : "#141414"
        });

        flag = true;

      } //If !flag

    } else {
      //Si scroll es menor a 200px ejecuta este codigo....
      if(flag) {
        //Si flag existe o es true.....
        $("#logo").css({
          // Seleccionamos el elemento con el id logo
          "margin-top": "150px",
          "width" : "250px",
          "height" : "250px"
        });


        $("#menuDesk > nav > ul > li > a").css({
          //Llamamos a nuestro elemento a
          "color":"white"
        });

        $("#menuDesk").css({
          //Llamamos a nuestro elemento menuDesk
          "background-color" : "transparent"
        });

        flag = false;

      } //If flag
    } //Termina Condicional Scroll

  })

})
