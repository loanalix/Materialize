function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

$(document).ready(function() {
  /* INITIALISATION */
  $('.sidenav').sidenav();
  $('.carousel').carousel();
  $('.parallax').parallax();
  $('.modal').modal();
  $('.carousel.carousel-slider').carousel({
    fullWidth: true
  });

  setInterval(() => {
    $('.carousel-3s').carousel('next');
  }, 3000);

  /* EASTER EGGS */

    // choo-choo
  $('#show-image').click(function() {
    $('#the-image').removeClass('hide');
  });
    // Undertale
  let coeur = false
  $('.coeur').click(function() {
    coeur = !coeur
    $('.coeur').attr('src', coeur ? 'img/UTFS/sansdance.gif' : 'img/UTFS/coeur.png');
  });

  let toby = false
  function tobyEgg() {
    toby = !toby

    if (toby) {
      $('.background-padding').children().hide()
      $('.background-padding')
        .css("aspect-ratio", "16 / 9")
        .addClass("valign-wrapper center-align")
        .append(
          $('<div />')
            .addClass("row toby-egg")
            .append(
              $('<div />')
                .addClass("col s4 offset-s4")
                .append('<img class="responsive-img" src="img/UTFS/sleeping-dog.gif">')
                .click(tobyEgg)
            )
            .append(
              $('<audio />')
                .attr({
                  'src': `audio/dogcheck${getRandomInt(1, 3)}.mp3`,
                  'loop': 'loop',
                  'volume': 0.1,
                  'autoplay': 'autoplay',
                  'style': 'display:none;'
                })
            )
        )
    }
    else {
      $('.toby-egg').remove()
      $('.background-padding')
        .css("aspect-ratio", "")
        .removeClass("valign-wrapper center-align")
        .children().show()
    }
  }

  $('.toby').click(tobyEgg)

    // TTD 3
  let taco = false
  $('#roblox').click(function() {
    taco = !taco

    if (taco)
      $('body').append(
        $('<div/>')
          .addClass("rain-container")
          .append(
            $('<div/>')
              .addClass("a")
          )
          .append(
            $('<div/>')
              .addClass("b")
          )
          .append(
            $('<audio />')
              .attr({
                'src': 'audio/tacos.mp3',
                'loop': 'loop',
                'volume': 0.1,
                'autoplay': 'autoplay',
                'style': 'display:none;'
              })
          )
      );
    else
      $('.rain-container').remove()
  });
});

new WOW().init();